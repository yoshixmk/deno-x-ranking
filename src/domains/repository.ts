// 表示させたいリポジトリ情報

export interface Repository {
  name: string;
  full_name: string; // owner name +  repository name
  html_url: string;
  stargazers_count: number;
  forks: number;
  watchers: number;
  subscribers_count: number;
  archived: boolean;
  description: string;
}

export type Repositories = Array<Repository>;
