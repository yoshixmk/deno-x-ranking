export const Tsv = "tsv";
export const Csv = "csv";
export const Table = "table";
export const MarkdownFile = "markdown";
export type FileFormat = typeof Tsv | typeof Csv
export type Format = FileFormat | typeof Table | typeof MarkdownFile;
