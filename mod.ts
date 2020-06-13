import { GithubDatabaseEntry } from "./github.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts";

if (Deno.args.length < 2) {
  console.log(Deno.args);
  console.info(
    "Please input your github account. Limit 5000 req per hour by GitHub.",
  );
  console.info("ex: deno run --allow-net --allow-write <username> <password> <file|table (default is file)>");
  Deno.exit(1);
}

const username = Deno.args[0];
const password = Deno.args[1];
type Format = 'file' | 'table'
const format: Format | undefined = Deno.args[1] as Format;

const databaseUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";
const res = await fetch(databaseUrl);

const entries: Readonly<Record<string, GithubDatabaseEntry>> = await res.json();

// 表示させたいリポジトリ情報
type Repository = {
  name: string;
  full_name: string; // owner name +  repository name
  html_url: string;
  stargazers_count: number;
  forks: number;
  watchers: number;
  subscribers_count: number;
  archived: boolean;
  description: string;
};

type RepositoryKey = keyof Repository;

const result: Repository[] = [];
for (const key of Object.keys(entries)) {
  //console.dir(entries[key]);

  const fetchUrl = `https://api.github.com/repos/${entries[key].owner}/${
    entries[key].repo
  }`;

  const json = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${encode(username + ":" + password)}`,
    },
  }).then((r) => r.json());

  result.push(json as Repository);

  // For Manual Testing
  // if (result.length > 2) {
  //   break;
  // }
}

result.sort(
    (a, b) =>
    a.stargazers_count < b.stargazers_count ||
    a.forks < b.forks ||
    a.watchers < b.watchers ||
    a.subscribers_count < b.subscribers_count ? 1 : -1
)

if (format == 'table') {
  console.table(result, [
    "name",
    "full_name",
    "html_url",
    "stargazers_count",
    "forks",
    "watchers",
    "subscribers_count",
    "archived"
    // ignore description is too long
  ]);
} else {
  const encoder = new TextEncoder();
  const data = result.map(r =>
    [r.name,
    r.full_name,
    r.html_url,
    r.stargazers_count,
    r.forks,
    r.watchers,
    r.subscribers_count,
    r.archived,
    r.description].join('\t')
  ).join('\n');
  await Deno.writeFile("ranking_result.tsv", encoder.encode(data));
}
