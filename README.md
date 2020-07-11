# deno-x-ranking
[![(Deno)](https://img.shields.io/badge/deno-v1.1.3-green.svg?style=flat-square&logo=deno)](https://deno.land)
![gh-pages](https://github.com/yoshixmk/deno-x-ranking/workflows/gh-pages/badge.svg)
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/ranking)  

🦕 Deno Third Party Modules Ranking 👑    
https://deno.land/x/ranking

## Ranking Page
https://yoshixmk.github.io/deno-x-ranking

## Usage
### File output
```Shell
$ deno run --allow-net --allow-write https://deno.land/x/ranking/mod.ts <github username> <github password> file
```

### Console output
```Shell
$ deno run --allow-net https://deno.land/x/ranking/mod.ts <github username> <github password> table
```

### Markdown output
```Shell
$ deno run --allow-net --allow-write --allow-read https://deno.land/x/ranking/mod.ts <github username> <github password> markdown
```

## Logic
Ranking GitHub Star count.  
And sorted by GitHub Star.  
If same GitHub Star count, rank using forks count, watchers count, subscribers count.

## Sample
[./examples/ranking_result.tsv](./examples/ranking_result.tsv)

## Plan
- [x] `"type": "github"` support  
- [ ] `"type": "npm"` support  
- [ ] `"type": "deno_std"` support  
- [x] real-time ranking page update
