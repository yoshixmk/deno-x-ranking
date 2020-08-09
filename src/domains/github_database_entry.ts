interface Entry {
}

export interface GithubEntry extends Entry {
  repository: string; // Github repository
  latestVersion: string;
}

export type GithubEntries = Array<GithubEntry>;
