import { GithubDatabaseEntry, GithubDatabaseEntries } from "../domains/github_database_entry.ts";
import { fetchAll } from "../repositories/resistory_repository.ts";

class ResistoryService {
  constructor() {
  }

  public await getGithubDatabaseEntries(): GithubDatabaseEntries {
    // TODO
    const modules = await fetchAll();
    const moduleNames = modules.flatMap(m => m.data.results).map(r => r.name);



  }
}

// singleton
export default new ResistoryService() as ResistoryService;
