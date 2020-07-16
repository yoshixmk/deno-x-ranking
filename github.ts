import {
  DatabaseEntry,
} from "https://raw.githubusercontent.com/denoland/deno_website2/master/util/registries.ts";

export interface GithubDatabaseEntry extends DatabaseEntry {
  type: "github";
  owner: string;
  repo: string;
  path?: string;
  default_version?: string;
}

const databaseUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";
export const resoinseDenoWebsiteGithub = () => fetch(databaseUrl);
