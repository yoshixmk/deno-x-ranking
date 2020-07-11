import { Repository } from "./Repository.ts";

export function unique(repositories: Repository[]): Repository[] {
  return [...new Map(repositories.map((o) => [o.html_url, o])).values()];
}
