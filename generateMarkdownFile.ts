import { Markdown } from "./deps.ts";
import { Repository } from "./mod.ts";

export function generateMarkdownFile(result: Repository[]) {
  const headers = [
    "name",
    "full_name",
    "html_url",
    "stargazers_count",
    "forks",
    "watchers",
    "subscribers_count",
    "archived",
    "description",
  ];
  const tableArray = Array<Array<string>>();
  tableArray.push(headers);
  result.forEach((r: Repository) => {
    tableArray.push(
      [
        r.name,
        r.full_name,
        r.html_url,
        r.stargazers_count?.toString(),
        r.forks?.toString(),
        r.watchers?.toString(),
        r.subscribers_count?.toString(),
        r.archived?.toString(),
        r.description,
      ],
    );
  });

  new Markdown()
    .table(
      tableArray,
    )
    .write("./examples/", "README");
}
