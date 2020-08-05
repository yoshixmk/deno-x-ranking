// config/default.json

import { coffee } from "../deps.ts";

export const denoResistory2: string = coffee.get("api.deno_resistory2")
  .string();
export const denoCdn: string = coffee.get("api.deno_cdn").string();
export const github: string = coffee.get("api.github").string();
