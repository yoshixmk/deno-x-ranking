import { encode } from "../../deps.ts";
import { GithubEntries } from "../domains/github_database_entry.ts";
import { Repositories, Repository } from "../domains/repository.ts";
import { concurrentPromise } from "../utils/concurrent_promise.ts";
import { sortOrderByDesc } from "../utils/sort.ts";
import { unique } from "../utils/unique.ts";

class GithubService {
  constructor() {
  }

  public async getGithubRepositories(
    githubEntries: GithubEntries,
    username: string,
    token: string,
  ): Promise<Repositories> {
    const repositoryPromises: (() => Promise<Repository>)[] = [];

    for (const entry of githubEntries) {
      const fetchUrl = `https://api.github.com/repos/${entry.repository}`;

      repositoryPromises.push(() =>
        fetch(fetchUrl, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${encode(username + ":" + token)}`,
          },
        }).then((r) => r.json())
      );
    }

    // const repositories: Repository[] = await Promise.all(repositoryPromises);
    const repositories: Repository[] = await concurrentPromise<Repository>(
      repositoryPromises,
      100,
    );

    // validation
    const validRepositories: Repository[] = [];
    for (const repository of repositories) {
      if (repository !== undefined && repository.name !== undefined) {
        validRepositories.push(repository);
      }
    }

    // sort
    const sortedResult = sortOrderByDesc(validRepositories);

    // unique
    const uniquedRepositories = unique(sortedResult);

    return uniquedRepositories;
  }
}

// singleton
export const githubService = new GithubService();
