import { Repository } from "./domains/repository.ts";
import { FileFormat, Tsv, Csv } from "./domains/Format.ts";

export class SeparatedFileCreator {
  private format: FileFormat;
  private separator: string;
  private outputFilePath: string;

  constructor(format: FileFormat, outputFilePath: string) {
    this.format = format;
    this.outputFilePath = outputFilePath === ""
      ? `./examples/ranking_result.${format}`
      : outputFilePath;
    switch (format) {
      case Tsv:
        this.separator = '"\t"';
        break;
      case Csv:
        this.separator = ', ';
        break;
      default:
        throw Error(`Cannot use the format, ${format}`);
    }
  }

  generateFile = async (result: Repository[]) => {
    const encoder = new TextEncoder();
    const escapeQuote = (s: string) => s.replaceAll('"', '""');
    const doubleQuote = (s: string) => `"${escapeQuote(s)}"`;
    const data = result.map((r) =>
      [
        r.name,
        r.full_name,
        r.html_url,
        r.stargazers_count,
        r.forks,
        r.watchers,
        r.subscribers_count,
        r.archived,
        r.description ?? "",
      ]
        .map((s) => doubleQuote(s.toString()))
        .join(this.separator)
    ).join("\n");
    await Deno.writeFile(this.outputFilePath, encoder.encode(data));
  };
}
