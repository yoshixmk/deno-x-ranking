import { GithubDatabaseEntry, encode } from "./deps.ts";
import { consoleTable } from "./console_table.ts";
import { generateTsvFile } from "./tsv_file_creator.ts";
import { generateMarkdownFile } from "./markdown_file_creator.ts";
import { sortOrderByAsc } from "./src/sort.ts";
import { unique } from "./src/unique.ts";
import { Repository } from "./src/Repository.ts";
import { concurrentPromise } from "./src/concurrentPromise.ts";

if (Deno.args.length < 2) {
  console.log(Deno.args);
  console.info(
    "Please input your github account. Limit 5000 req per hour by GitHub.",
  );
  console.info(
    "ex: deno run --allow-net --allow-write <username> <password> <file|table (default is file)>",
  );
  Deno.exit(1);
}

const username = Deno.args[0];
const password = Deno.args[1];
const File = "file";
const Table = "table";
const MarkdownFile = "markdown";
type Format = typeof File | typeof Table | typeof MarkdownFile;
const format: Format | undefined = Deno.args[2] as Format;

console.debug(`Started. format = ${format}`);

const databaseUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";
const res = await fetch(databaseUrl);

const entries: Readonly<Record<string, GithubDatabaseEntry>> = await res.json();

type RepositoryKey = keyof Repository;

const repositoryPromises: (() => Promise<Repository>)[] = [];

for (const key of Object.keys(entries)) {
  const fetchUrl = `https://api.github.com/repos/${entries[key].owner}/${
    entries[key].repo
  }`;

  repositoryPromises.push(() =>
    fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${encode(username + ":" + password)}`,
      },
    }).then((r) => r.json())
  );

  // For Manual Testing
  // if (repositoryPromises.length > 3) {
  //   break;
  // }
}

// const repositories: Repository[] = await Promise.all(repositoryPromises);
const repositories: Repository[] = await concurrentPromise<Repository>(
  repositoryPromises,
  200,
);

// validation
const validRepositories: Repository[] = [];
for (const repository of repositories) {
  if (repository !== undefined && repository.name !== undefined) {
    validRepositories.push(repository);
  }
}

// sort
const sortedResult = sortOrderByAsc(validRepositories);

// unique
const uniquedRepositories = unique(sortedResult);

switch (format) {
  case Table:
    consoleTable(uniquedRepositories);
    break;
  case File:
    await generateTsvFile(uniquedRepositories);
    break;
  case MarkdownFile:
    await generateMarkdownFile(uniquedRepositories);
    break;
}

console.debug(`End. format = ${format}`);
