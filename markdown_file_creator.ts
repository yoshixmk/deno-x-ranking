import { Markdown, link } from "./deps.ts";
import { Repository } from "./src/Repository.ts";

export function generateMarkdownFile(result: Repository[]) {
  const headers = [
    "👑",
    "Repository",
    "Stars",
    "Forks",
    "Description",
  ];
  const tableContent = Array<Array<string>>();
  tableContent.push(headers);
  result.forEach((r: Repository, index: number) => {
    tableContent.push(
      [
        (index + 1).toString(),
        link(r.full_name, r.html_url),
        r.stargazers_count?.toString(),
        r.forks?.toString(),
        r.description,
      ],
    );
  });

  new Markdown()
    .table(
      tableContent,
    )
    .write("./examples/", "README");
}
