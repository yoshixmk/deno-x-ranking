// Deno Rest API across CDN

import { denoCdn } from "../config.ts";
import { concurrentPromise } from "../utils/concurrentPromise.ts";

type Version = string;
type LatestVersion = Version;
export interface Versions {
  latest: LatestVersion;
  versions: Version[];
}

export interface Meta {
  uploaded_at: string;
  directory_listing: DirectoryListing[];
  upload_options: UploadOptions;
}

export interface DirectoryListing {
  path: string;
  size: number;
  type: string; // e.g. "dir" | "file"
}

export interface UploadOptions {
  type: string;
  repository: string;
  ref: string;
}

export const fetchLatestVersionByModuleName = (
  name: string,
): Promise<LatestVersion> => {
  return fetch(new URL(`/${name}/meta/versions.json`, denoCdn))
    .then<Versions>(res => res.json())
    .then(versions => versions.latest);
};

export const fetchLatestMetaByModuleName = async (
  name: string,
): Promise<Meta> => {
  const version = await fetchLatestVersionByModuleName(name);
  return fetch(
    new URL(`/${name}/versions/${version}/meta/meta.json`, denoCdn),
  ).then((res) => res.json());
};
