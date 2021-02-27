# deno-x-ranking
[![(Deno)](https://img.shields.io/badge/deno-^1.7.0-green.svg?style=flat-square&logo=deno)](https://deno.land)
![gh-pages](https://github.com/yoshixmk/deno-x-ranking/workflows/gh-pages/badge.svg)
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/ranking)  

![Rating ranking Dinosaurus](./examples/favicon-192.png)

🦕 Deno Third Party Modules Ranking 👑    
https://deno.land/x/ranking

## Ranking Page
https://yoshixmk.github.io/deno-x-ranking

## Get Started

### Github API Tokens
Prepare an access token for Github public access permission only from the following URL. When public access setting permissions, you can leave all check boxes cleared.  
https://github.com/settings/tokens/new

### Tsv / Csv output
```Shell
$ deno run --allow-net --allow-write --allow-env https://deno.land/x/ranking/mod.ts -u <github username> -t <github token> -f <tsv | csv>
```

### Console output
```Shell
$ deno run --allow-net --allow-env https://deno.land/x/ranking/mod.ts -u <github username> -t <github token> -f table
```

### Markdown output
```Shell
$ deno run --allow-net --allow-write --allow-read --allow-env https://deno.land/x/ranking/mod.ts -u <github username> -t <github token> -f markdown
```

### Help
```Shell
$ deno run https://deno.land/x/ranking/mod.ts -h
```

## Testing
```Shell
$ deno test --allow-read --allow-env --allow-net
```

## Ranking Logic
After processing according to the ranking logic below, limit to only the necessary data for each output format, and output at the end.
1. Ranking GitHub Star count.  
1. Sorted by GitHub Star.  
1. If same GitHub Star count, continue to check rank using forks count, watchers count, subscribers count.

## Sample
- [./examples/ranking_result.tsv](./examples/ranking_result.tsv)
- [./examples/README.md](./examples/README.md)

## Hosting using Markdown format
``` Shell
$ deno run --unstable --allow-read --allow-write --allow-net https://raw.githubusercontent.com/xcatliu/pagic/v1.2.0/mod.ts build --serve --watch
```

## 429 Too Many Requests ??
This module sends many requests to [deno registry2 API](https://github.com/denoland/deno_registry2) and [Github API](https://docs.github.com/en/free-pro-team@latest/rest).  
Please be careful about continuous use.

## Plan
- [x] `"type": "github"` support
- [x] `"type": "npm"` ~~support~~ not support. [deprecated] NPM backed deno.land/x entries are deprecated will be removed on August 1st 2020.
- [x] `"type": "deno_std"` support. The repository that uses deno_std is already included in the ranking by Deno himself
- [x] real-time ranking page update
- [x] Corresponds to the [registry2](https://deno.land/posts/registry2). Change to not use the `database.json`.
