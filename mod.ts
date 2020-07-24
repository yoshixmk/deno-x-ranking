import {
  GithubDatabaseEntry,
  encode,
  args,
  EarlyExitFlag,
  Option,
  Choice,
  PARSE_FAILURE,
  red,
  PartialOption,
} from "./deps.ts";
import { consoleTable } from "./console_table.ts";
import { generateTsvFile } from "./tsv_file_creator.ts";
import { generateMarkdownFile } from "./markdown_file_creator.ts";
import { sortOrderByDesc as sortOrderByDesc } from "./src/sort.ts";
import { unique } from "./src/unique.ts";
import { Repository } from "./src/Repository.ts";
import { concurrentPromise } from "./src/concurrentPromise.ts";
import { resoinseDenoWebsiteGithub } from "./github.ts";
import { green, Text } from "./deps.ts";

const Tsv = "tsv";
const Table = "table";
const MarkdownFile = "markdown";
type Format = typeof Tsv | typeof Table | typeof MarkdownFile;

const parser = args
  .describe("Add or subtract two numbers")
  .with(
    EarlyExitFlag("help", {
      describe: "Show help",
      alias: ["h"],
      exit() {
        console.log(parser.help());
        return Deno.exit();
      },
    }),
  )
  .with(
    Option("username", {
      type: Text,
      describe: "Github account username without '@'. required token",
      alias: ["u"],
    }),
  )
  .with(
    Option("token", {
      type: Text,
      describe: "Github account token. required username",
      alias: ["t"],
    }),
  )
  .with(
    Option("format", {
      type: Choice<Format>(
        {
          value: Tsv,
          describe: "Output tsv file",
        },
        {
          value: Table,
          describe: "Output console table",
        },
        {
          value: MarkdownFile,
          describe: "Output markdown file",
        },
      ),
      alias: ["f"],
      describe: "Choice output format",
    }),
  ).with(
    PartialOption("sampling", {
      type: Text,
      describe: "For testing, fetch a little sample from API. --sampling true",
      default: "false",
    }),
  );

const res = parser.parse(Deno.args);

if (res.tag === PARSE_FAILURE) {
  console.error("Failed to parse CLI arguments");
  console.error(res.error.toString());
  Deno.exit(1);
}
console.dir(res.value);
const { help, username, token, format, sampling } = res.value;

if (username === undefined || token === undefined) {
  console.log(red("Needs to input both username and token."));
  Deno.exit(1);
}
if (format === undefined) {
  console.log(red("Needs to input output format."));
  Deno.exit(1);
}

console.debug(green(`Started. format = ${format}`));

const githubDatabaseResource = await resoinseDenoWebsiteGithub();
const entries: Readonly<Record<string, GithubDatabaseEntry>> =
  await githubDatabaseResource.json();

const repositoryPromises: (() => Promise<Repository>)[] = [];

for (const key of Object.keys(entries)) {
  const fetchUrl = `https://api.github.com/repos/${entries[key].owner}/${
    entries[key].repo
  }`;

  repositoryPromises.push(() =>
    fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${encode(username + ":" + token)}`,
      },
    }).then((r) => r.json())
  );

  // For Manual Testing
  if (sampling !== "true" && repositoryPromises.length > 3) {
    console.debug(
      green(`Success: Sampling fetch repository info. sampling = ${sampling}`),
    );
    break;
  }
}

// const repositories: Repository[] = await Promise.all(repositoryPromises);
const repositories: Repository[] = await concurrentPromise<Repository>(
  repositoryPromises,
  100,
);

// validation
const validRepositories: Repository[] = [];
for (const repository of repositories) {
  if (repository !== undefined && repository.name !== undefined) {
    validRepositories.push(repository);
  }
}

// sort
const sortedResult = sortOrderByDesc(validRepositories);

// unique
const uniquedRepositories = unique(sortedResult);

switch (format) {
  case Table:
    consoleTable(uniquedRepositories);
    break;
  case Tsv:
    await generateTsvFile(uniquedRepositories);
    break;
  case MarkdownFile:
    await generateMarkdownFile(uniquedRepositories);
    break;
}

console.debug(green(`End. format = ${format}`));
