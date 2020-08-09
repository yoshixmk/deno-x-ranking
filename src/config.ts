import { coffee } from "../deps.ts";

// @see config/default.json
export const denoRegistry2: string = coffee.get("api.deno_registry2").string();
export const denoCdn: string = coffee.get("api.deno_cdn").string();
export const github: string = coffee.get("api.github").string();
