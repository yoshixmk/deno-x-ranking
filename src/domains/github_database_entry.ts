export interface GithubEntry {
  repository: string; // Github repository
  latestVersion: string;
}

export type GithubEntries = Array<GithubEntry>;
