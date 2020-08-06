import { Repository } from "./domains/repository.ts";

export function consoleTable(result: Repository[]) {
  console.table(result, [
    "name",
    "full_name",
    "html_url",
    "stargazers_count",
    "forks",
    "watchers",
    "subscribers_count",
    "archived",
  ]);
}
