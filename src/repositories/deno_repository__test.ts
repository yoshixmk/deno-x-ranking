import { assertEquals } from "https://deno.land/std@0.69.0/testing/asserts.ts";
import { fetchLatestMetaByModuleName as fetchMetaByModuleName } from "./deno_repository.ts";

Deno.test("fetchLatestMetaByName", async () => {
  const latestMeta = await fetchMetaByModuleName("ranking", "0.0.5");
  assertEquals(latestMeta.upload_options.repository, "yoshixmk/deno-x-ranking");
});

Deno.test("fetchLatestMetaByName using promise all", async () => {
  const [ranking, std] = await Promise.all([
    fetchMetaByModuleName("ranking", "0.1.1"),
    fetchMetaByModuleName("std", "0.69.0"),
  ]);
  assertEquals(ranking.upload_options.repository, "yoshixmk/deno-x-ranking");
  assertEquals(std.upload_options.repository, "denoland/deno");
});
