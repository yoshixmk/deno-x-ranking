import coffee from "https://deno.land/x/coffee@1.0.0/mod.ts";
export { encode } from "https://deno.land/std@0.74.0/encoding/base64.ts";
export { link, Markdown } from "https://deno.land/x/deno_markdown@0.3/mod.ts";

export { green, red } from "https://deno.land/std@0.74.0/fmt/colors.ts";
export { args } from "https://deno.land/x/args@2.0.7/wrapper.ts";
export {
  EarlyExitFlag,
  Option,
  PartialOption,
} from "https://deno.land/x/args@2.0.7/flag-types.ts";
export {
  Choice,
  FiniteNumber,
  Text,
} from "https://deno.land/x/args@2.0.7/value-types.ts";
export { PARSE_FAILURE } from "https://deno.land/x/args@2.0.7/symbols.ts";
export { coffee };

// Test dependencies
export {
  assert,
  assertEquals,
} from "https://deno.land/std@0.74.0/testing/asserts.ts";
