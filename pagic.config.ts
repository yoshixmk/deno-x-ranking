export default {
  base: "/deno-x-ranking/",
  srcDir: "./examples",
  ignore: [/\/public\//, /\/\./, /\/LICENSE/],
  theme: "docs",
  plugins: ["sidebar", "script", "ga"],
  title: "Deno X ranking",
  sidebar: [
    "README.md",
  ],
  nav: [
    {
      text: "Tegebu",
      link: "https://www.tegebu.com/",
    },
    {
      text: "Profile",
      link: "https://yoshixmk.github.io/profile/",
    },
    {
      text: "Github",
      link: "https://github.com/yoshixmk/deno-x-ranking",
    },
    {
      text: "Twitter",
      link: "https://twitter.com/yoshixmk",
    },
    {
      text: "Qiita",
      link: "https://qiita.com/yoshixmk",
    },
  ],
  ga: {
    id: "UA-149348992-3",
  },
};
