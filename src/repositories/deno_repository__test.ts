import { assertEquals } from "../../deps.ts";
import { fetchLatestMetaByModuleName as fetchMetaByModuleName } from "./deno_repository.ts";

// Test using outside API service. Service monitoring
Deno.test("fetchLatestMetaByName using promise all", async () => {
  const [ranking, std] = await Promise.all([
    fetchMetaByModuleName("ranking", "0.1.1"),
    fetchMetaByModuleName("std", "0.70.0"),
  ]);
  assertEquals(ranking.upload_options.repository, "yoshixmk/deno-x-ranking");
  assertEquals(std.upload_options.repository, "denoland/deno");
});
