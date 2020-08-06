import {
  GithubEntry,
  GithubEntries,
} from "../domains/github_database_entry.ts";
import {
  Meta,
} from "../repositories/deno_repository.ts";
import { fetchAll } from "../repositories/resistory_repository.ts";
import { fetchLatestMetaByModuleName } from "../repositories/deno_repository.ts";
import { concurrentPromise } from "../utils/concurrentPromise.ts";

class ResistoryService {
  constructor() {
  }

  public async getGithubEntries(): Promise<GithubEntries> {
    const modules = await fetchAll();
    const moduleNames = modules.flatMap((m) => m.data.results).map((r) =>
      r.name
    );

    const metaPromises = moduleNames.map((name) =>
      () => fetchLatestMetaByModuleName(name)
    );

    const metas: Meta[] = await concurrentPromise<Meta>(metaPromises, 100);

    return metas.flatMap<GithubEntry>((meta) => {
      return {
        "repository": meta.upload_options.repository,
        "latestVersion": meta.upload_options.ref,
      };
    });
  }
}

// singleton
export default new ResistoryService() as ResistoryService;
