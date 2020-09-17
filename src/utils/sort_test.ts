import { assertEquals } from "https://deno.land/std@0.69.0/testing/asserts.ts";
import type { Repository } from "../domains/repository.ts";
import { sortOrderByDesc } from "./sort.ts";

const sampleCreater = (index: number): Repository => {
  return {
    "name": `name${index}`,
    "full_name": `full_name${index}`,
    "html_url": `html_url${index}`,
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

Deno.test("DESC sorting by stargazers_count", (): void => {
  const repos = [repository1, repository2];
  assertEquals(sortOrderByDesc(repos), [repository2, repository1]);
});

Deno.test("DESC sorting by forks when eq stargazers_count", (): void => {
  repository1.stargazers_count = 2;
  const repos = [repository1, repository2];
  assertEquals(sortOrderByDesc(repos), [repository2, repository1]);
});

Deno.test("DESC sorting by watchers when eq stargazers_count, forks", (): void => {
  repository1.stargazers_count = 2;
  repository1.forks = 2;
  const repos = [repository1, repository2];
  assertEquals(sortOrderByDesc(repos), [repository2, repository1]);
});

Deno.test("DESC sorting by subscribers_count when eq stargazers_count, forks, watchers", (): void => {
  repository1.stargazers_count = 2;
  repository1.forks = 2;
  repository1.watchers = 2;
  const repos = [repository1, repository2];
  assertEquals(sortOrderByDesc(repos), [repository2, repository1]);
});
