import {
  assert,
  assertEquals,
} from "../../deps.ts";
import type { Repository } from "../domains/repository.ts";
import { unique } from "./unique.ts";

const sampleCreater = (index: number): Repository => {
  return {
    "name": `name${index}`,
    "full_name": `full_name${index}`,
    "html_url": `duplicate!!`, // should unique
    "stargazers_count": index,
    "forks": index,
    "watchers": index,
    "subscribers_count": index,
    "archived": false,
    "description": `description${index}`,
  };
};
const repository1 = sampleCreater(1);
const repository2 = sampleCreater(2);

Deno.test("unique", (): void => {
  const repos = [repository1, repository2];
  const actual = unique(repos);
  assertEquals(actual.length, 1);
  // actual is repository1 or repository2
  assert(repos.includes(actual[0]));
});
