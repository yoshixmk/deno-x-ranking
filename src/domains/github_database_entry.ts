interface DatabaseEntry {
}

export interface GithubDatabaseEntry extends DatabaseEntry {
  owner: string;
  repo: string;
}

export type GithubDatabaseEntries = Array<GithubDatabaseEntry>
