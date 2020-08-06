import {
  fetchLatestMetaByModuleName,
} from "./deno_repository.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("fetchLatestMetaByName", async () => {
  const latestMeta = await fetchLatestMetaByModuleName("ranking");
  assertEquals(latestMeta.upload_options.repository, "yoshixmk/deno-x-ranking");
});

Deno.test("fetchLatestMetaByName using promise all", async () => {
  const [ranking, std] = await Promise.all([
    fetchLatestMetaByModuleName("ranking"),
    fetchLatestMetaByModuleName("std"),
  ]);
  assertEquals(ranking.upload_options.repository, "yoshixmk/deno-x-ranking");
  assertEquals(std.upload_options.repository, "denoland/deno");
});
