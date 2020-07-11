import { Repository } from "./Repository.ts";

export function sortOrderByAsc(repositories: Repository[]): Repository[] {
  return repositories.sort(
    (a, b) => {
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      } else if (
        a.forks < b.forks && a.stargazers_count == b.stargazers_count
      ) {
        return 1;
      } else if (
        a.watchers < b.watchers && a.forks == b.forks &&
        a.stargazers_count == b.stargazers_count
      ) {
        return 1;
      } else if (
        a.subscribers_count < b.subscribers_count &&
        a.watchers == b.watchers &&
        a.forks == b.forks && a.stargazers_count == b.stargazers_count
      ) {
        return 1;
      }
      return -1;
    },
  );
}
