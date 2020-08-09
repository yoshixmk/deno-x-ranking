import { green } from "../../deps.ts";
import {
  GithubEntries,
  GithubEntry,
} from "../domains/github_database_entry.ts";
import {
  fetchLatestMetaByModuleName,
  fetchLatestVersionByModuleName,
  Meta,

  Versions,
} from "../repositories/deno_repository.ts";
import { fetchAll } from "../repositories/resistory_repository.ts";
import { concurrentPromise } from "../utils/concurrentPromise.ts";

class ResistoryService {
  constructor() {
  }

  public async getGithubEntries(
    sampling: string = "false",
  ): Promise<GithubEntries> {
    const modules = await fetchAll();
    const moduleNames = modules
      .flatMap((m) => m.data.results)
      .map((r) => r.name);

    const versions = await this.getVersions(moduleNames);

    console.debug(green("Done. fetch versions"));

    const metas: Meta[] = await this.getMetas(moduleNames, versions);

    console.debug(green("Done. fetch metas"));

    const githubEntries = metas.map<GithubEntry>((meta) => {
      return {
        "repository": meta.upload_options.repository,
        "latestVersion": meta.upload_options.ref,
      };
    });
    if (sampling === "true") {
      return githubEntries.splice(0, 10);
    }
    return githubEntries;
  }

  private async getVersions(
    moduleNames: string[],
  ): Promise<Map<string, Versions>> {
    const versionPromises = moduleNames.map((name) =>
      () =>
        fetchLatestVersionByModuleName(name).then<
          [string, Versions]
        >(
          (v) => [name, v],
        ).catch((err) =>
          ["Fail", { latest: null, versions: [], isLegacy: false }] as [
            string,
            Versions,
          ]
        )
    );
    const versions = new Map<string, Versions>(
      await concurrentPromise(versionPromises, 100),
    );
    versions.delete("Fail");
    return versions;
  }

  private async getMetas(
    moduleNames: string[],
    versions: Map<string, Versions>,
  ): Promise<Meta[]> {
    const metaPromises = moduleNames
      .filter((name) =>
        versions.get(name) !== undefined && // An error happened
        versions.get(name)?.latest !== null // Cannot be further processed
      )
      .map((name) =>
        () =>
          fetchLatestMetaByModuleName(
            name,
            versions.get(name)?.latest as string,
          ).catch((err) => {
            return null; // TODO Error Object
          })
      );
    return (await concurrentPromise(metaPromises, 100))
      .filter<Meta>(
        (meta: Meta | null): meta is Meta => meta !== null,
      );
  }
}

// singleton
export const resistoryService = new ResistoryService();
