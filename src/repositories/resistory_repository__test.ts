import { fetchOne, fetchAll } from "./resistory_repository.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("fetchOne", async () => {
  const module = await fetchOne();
  assertEquals(module.success, true);
});

Deno.test("fetchAll hit count sum EQ fetchOne total count", async () => {
  const module = await fetchOne();
  const modules = await fetchAll();
  assert(modules.every((m) => m.success === true));

  const sum = modules.map((m) => m.data.results.length)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  assertEquals(sum, module.data.total_count);
});
