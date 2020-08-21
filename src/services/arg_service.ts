import {
  args,
  EarlyExitFlag,
  Option,
  Choice,
  PartialOption,
} from "../../deps.ts";
import { Text } from "../../deps.ts";
import { Format, Tsv, Table, MarkdownFile, Csv } from "../domains/Format.ts";

export const parseArgs = () => {
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
            value: Csv,
            describe: "Output csv file",
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
      PartialOption("outputFile", {
        type: Text,
        describe:
          "Output file path. Only file like tsv and csv.",
        alias: ["o"],
        default: "",
      }),
    ).with(
      PartialOption("sampling", {
        type: Text,
        describe:
          "For testing, fetch a little sample from API. --sampling true",
        default: "false",
      }),
    );
  return parser;
};
