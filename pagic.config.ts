export default {
    base: "/deno-x-ranking/",
    srcDir: ".",
    ignore: [/\/public\//, /\/\./, /\/LICENSE/],
    theme: "default",
    plugins: ["sidebar", "script", "ga"],
    title: "Deno X ranking",
    sidebar: [
      "examples/README.md",
    ],
    nav: [
      {
        text: "Tegebu",
        link: "https://www.tegebu.com/",
      },
      {
        text: "Deno Third Party Modules Ranking",
        link: "https://deno.land/x/ranking",
      },
      {
        text: "Github",
        link: "https://github.com/yoshixmk",
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
      id: "UA-149348992-2",
    },
  };
  