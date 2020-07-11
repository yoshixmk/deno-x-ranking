import { Repository } from "./src/Repository.ts";

export async function generateTsvFile(result: Repository[]) {
  const encoder = new TextEncoder();
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
      r.description,
    ].join("\t")
  ).join("\n");
  await Deno.writeFile("./examples/ranking_result.tsv", encoder.encode(data));
}
