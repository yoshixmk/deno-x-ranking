// Deno Rest API across CDN

import { denoCdn } from "../config.ts";
import { concurrentPromise } from "../utils/concurrentPromise.ts";

type Version = string;
type LatestVersion = Version;
export interface Versions {
  latest: LatestVersion | null;
  versions: Version[];
  isLegacy?: boolean;
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

export const fetchLatestVersionByModuleName = async (
  name: string,
): Promise<Versions> => {
  const res = await fetch(
    new URL(`/${name}/meta/versions.json`, denoCdn),
  );
  try {
    return await res.json();
  } catch (err) {
    console.warn(`Module name is ${name} / Error status is ${res.statusText}`);
    throw err;
  }
};

export const fetchLatestMetaByModuleName = async (
  name: string,
  latest: LatestVersion,
): Promise<Meta> => {
  const res = await fetch(
    new URL(`/${name}/versions/${latest}/meta/meta.json`, denoCdn),
  );
  // return res.json();
  try {
    return await res.json();
  } catch (err) {
    console.warn(`Module name is ${name} / Error status is ${res.statusText}`);
    throw err;
  }
};
