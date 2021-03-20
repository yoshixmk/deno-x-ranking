import { Args } from "../../deps.ts";
import { Csv, Format, MarkdownFile, Table, Tsv } from "../domains/Format.ts";

class Flag {
  private name: string;
  private alias?: string;
  private describe?: string;
  private availableValues: any[];
  constructor(
    { name, alias, describe, availableValues }: {
      name: string;
      alias?: string;
      describe?: string;
      availableValues?: any[];
    },
  ) {
    this.name = name;
    this.alias = alias;
    this.describe = describe;
    this.availableValues = availableValues ?? [];
  }
  get getName() {
    return this.name;
  }
  get getAlias() {
    return this.alias;
  }
  get getDescribe() {
    return this.describe;
  }
  get getAvailableValues() {
    return this.availableValues;
  }
  exists(args: Args): Boolean {
    return args[this.alias ?? this.name] !== undefined ||
      args[this.name] !== undefined;
  }
  valueIfExists(args: Args): string | undefined {
    if (args[this.alias ?? this.name] !== undefined) {
      return args[this.alias ?? this.name];
    }
    if (args[this.name] !== undefined) {
      return args[this.name];
    }
    return;
  }
  toString(): String {
    return `--${this.name} (-${this.alias ?? ""}):\t${this.describe}`;
  }
}

const help = new Flag({ name: "help", alias: "h", describe: "Show help" });
const username = new Flag({
  name: "username",
  alias: "u",
  describe: "Github account username without '@'. required token",
});
const token = new Flag({
  name: "token",
  alias: "t",
  describe: "Github account token. required username",
});
const format = new Flag({
  name: "format",
  alias: "f",
  describe:
    "Output format. tsv file, csv file, markdown file, or console table",
  availableValues: [
    Tsv,
    Csv,
    Table,
    MarkdownFile,
  ],
});
const outputFile = new Flag({
  name: "outputFile",
  alias: "o",
  describe: "Output file path. Only file like tsv and csv.",
});
const sampling = new Flag({
  name: "sampling",
  alias: "s",
  describe: "For testing, fetch a little sample from API. --sampling true",
});
const allFlags: Array<Flag> = [
  help,
  username,
  token,
  format,
  outputFile,
  sampling,
];

export const parsedValue = (args: Args) => {
  if (help.exists(args)) {
    allFlags.forEach((flag: Flag) => console.log(flag.toString()));
    Deno.exit(0);
  }

  return {
    username: username.valueIfExists(args),
    token: token.valueIfExists(args),
    format: format.valueIfExists(args),
    outputFile: outputFile.valueIfExists(args),
    sampling: sampling.valueIfExists(args)
  }
};
