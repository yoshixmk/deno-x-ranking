

export default {
    base: "/deno-x-ranking/",
    srcDir: "./examples",
    theme: "docs",
    plugins: ["ga"],
    title: "Deno X ranking",
    github: 'https://github.com/yoshixmk/deno-x-ranking',
    head: React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "stylesheet", href: "/deno-x-ranking/custom.css" })),
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
            text: "Twitter",
            link: "https://twitter.com/yoshixmk",
        },
        {
            text: "Qiita",
            link: "https://qiita.com/yoshixmk",
        },
    ],
    tools: {
        backToTop: true
    },
    ga: {
        id: "UA-149348992-3",
    },
};
