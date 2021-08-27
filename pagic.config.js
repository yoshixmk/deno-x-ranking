// @deno-types="https://cdn.pagic.org/@types/react@16.9.50/index.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
export default {
    srcDir: "./examples",
    outDir: "dist",
    include: undefined,
    exclude: [
        // Dot files
        "**/.*",
        "pagic.config.tsx",
    ],
    root: "/deno-x-ranking/",
    theme: "docs",
    plugins: ["ga"],
    watch: false,
    serve: false,
    port: 8000,
    title: "Deno X ranking",
    github: "https://github.com/yoshixmk/deno-x-ranking",
    head: (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "stylesheet", href: "/deno-x-ranking/custom.css" }),
        React.createElement("script", { async: true, defer: true, type: "text/javascript", src: "/deno-x-ranking/custom.js" }),
        React.createElement("link", { rel: "icon", type: "", href: "/deno-x-ranking/favicon.ico" }),
        React.createElement("link", { rel: "apple-touch-icon", href: "/deno-x-ranking/favicon-192.png" }))),
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
        backToTop: true,
    },
    ga: {
        id: "UA-149348992-3",
    },
};
