# deno-x-ranking
🦕 Deno Third Party Modules Ranking 👑  
https://deno.land/x/ranking

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
