import { Args } from "../../deps.ts";
import { Csv, Format, MarkdownFile, Table, Tsv } from "../domains/Format.ts";

class Flag {
  private name: string;
  private alias?: string;
  private describe?: string;
  private availableValues: any[];
  constructor({name, alias, describe, availableValues}: {name: string, alias?: string, describe?: string, availableValues?: any[]}) {
    this.name = name;
    this.alias = alias;
    this.describe = describe;
    this.availableValues = availableValues ?? [];
  }
}

const help = new Flag({name: "help", alias: "h", describe: "Show help"});
const username = new Flag({name: "username", alias: "u", describe: "Github account username without '@'. required token"});
const token = new Flag({name: "token", alias: "t", describe: "Github account token. required username"});
const format = new Flag({name: "format", alias: "f", describe: "Output format. tsv file, csv file, markdown file, or console table"});

export const parsedValue = (args: Args) => {
  console.dir(args)
  //   .with(
  //     Option("format", {
  //       type: Choice<Format>(
  //         {
  //           value: Tsv,
  //           describe: "Output tsv file",
  //         },
  //         {
  //           value: Csv,
  //           describe: "Output csv file",
  //         },
  //         {
  //           value: Table,
  //           describe: "Output console table",
  //         },
  //         {
  //           value: MarkdownFile,
  //           describe: "Output markdown file",
  //         },
  //       ),
  //       alias: ["f"],
  //       describe: "Choice output format",
  //     }),
  //   ).with(
  //     PartialOption("outputFile", {
  //       type: Text,
  //       describe: "Output file path. Only file like tsv and csv.",
  //       alias: ["o"],
  //       default: "",
  //     }),
  //   ).with(
  //     PartialOption("sampling", {
  //       type: Text,
  //       describe:
  //         "For testing, fetch a little sample from API. --sampling true",
  //       default: "false",
  //     }),
  //   );
  // return parser;
};
