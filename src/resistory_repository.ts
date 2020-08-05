// list modules from resistory2 API
// @see https://github.com/denoland/deno_registry2/blob/main/API.md#get-modules

import { denoResistory2 } from "./Config.ts";
import { concurrentPromise } from "./concurrentPromise.ts";

type ModulesResponse = {
  "success": boolean;
  "data": {
    "total_count": number;
    "results": Array<
      {
        "name": string;
        "description": string;
        "star_count": number;
      }
    >;
  };
};

export const fetchOne = (): Promise<ModulesResponse> => {
  const moduleResponse: Promise<ModulesResponse> = fetch(
    new URL("/modules", denoResistory2),
  )
    .then((res) => res.json());
  return moduleResponse;
};

export const fetchAll = async (): Promise<Array<ModulesResponse>> => {
  const responseOne = await fetchOne();

  const promises: (() => Promise<ModulesResponse>)[] = [];

  const perPage = 100;
  const lastPageNumber = Math.ceil(responseOne.data.total_count / perPage);
  [...Array(lastPageNumber)].forEach((_, i) => {
    const pageNumber = i + 1;
    promises.push(() =>
      fetch(
        new URL(`/modules?limit=${perPage}&page=${pageNumber}`, denoResistory2),
      ).then((r) => r.json())
    );
  });

  return concurrentPromise<ModulesResponse>(promises, 100);
};
