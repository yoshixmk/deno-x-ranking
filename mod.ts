import {
  green,
  PARSE_FAILURE,
  red,
} from "./deps.ts";
import { consoleTable } from "./src/console_table.ts";
import { Csv, MarkdownFile, Table, Tsv } from "./src/domains/Format.ts";
import { SeparatedFileCreator } from "./src/file_creator.ts";
import { generateMarkdownFile } from "./src/markdown_file_creator.ts";
import { parseArgs } from "./src/services/arg_service.ts";
import { githubService } from "./src/services/github_service.ts";
import { registryService } from "./src/services/registry_service.ts";

const parser = parseArgs();

const res = parser.parse(Deno.args);

if (res.tag === PARSE_FAILURE) {
  console.error("Failed to parse CLI arguments");
  console.error(res.error.toString());
  Deno.exit(1);
}
console.dir(res.value);
const { help, username, token, format, outputFile, sampling } = res.value;

if (username === undefined || token === undefined) {
  console.log(red("Needs to input both username and token."));
  Deno.exit(1);
}
if (format === undefined) {
  console.log(red("Needs to input output format."));
  Deno.exit(1);
}

console.debug(green(`Started. format = ${format}`));

const isSampling = sampling !== "false";
const githubEntries = await registryService.getGithubEntries(isSampling);

const githubRepositories = githubService.getGithubRepositories(
  githubEntries,
  username,
  token,
);

const rankingEntries = await githubRepositories;
switch (format) {
  case Table:
    consoleTable(rankingEntries);
    break;
  case Tsv:
  case Csv:
    await new SeparatedFileCreator(format, outputFile).generateFile(rankingEntries);
    break;
  case MarkdownFile:
    await generateMarkdownFile(rankingEntries);
    break;
  default:
    throw Error(`Cannot use the format, ${format}`);
}

console.debug(green(`End. format = ${format}`));
