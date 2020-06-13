# deno-x-ranking
🦕 Deno Third Party Modules Ranking 👑

## Usage
### File output
```Typescript
deno run --allow-net --allow-write mod.ts <github username> <github password>
```

### Console output
```Typescript
deno run --allow-net mod.ts <github username> <github password>
```

## Logic
Sorted by stargazers count.  
If same count, rank using stargazers count forks, watchers, subscribers count.

## Sample
[./ranking_result.tsv](./ranking_result.tsv)
