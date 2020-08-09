import { Repository, Repositories } from "../domains/repository.ts";

class GithubService {
  constructor() {
  }

  public getGithubRepositories(): Repositories {
    // TODO
  }
}

// singleton
export default new GithubService() as GithubService;
