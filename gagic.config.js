// @deno-types="https://deno.land/x/gagic@0.9.5/src/types/react/v16.14.0/react.d.ts"
import React from "https://dev.jspm.io/react@16.14.0";
export default {
    root: "/deno-x-ranking/",
    srcDir: "./examples",
    theme: "docs",
    plugins: ["ga"],
    title: "Deno X ranking",
    github: "https://github.com/yoshixmk/deno-x-ranking",
    head: React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "stylesheet", href: "/deno-x-ranking/custom.css" }),
        React.createElement("script", { async: true, defer: true, type: "text/javascript", src: "/deno-x-ranking/custom.js" }),
        React.createElement("link", { rel: "icon", type: "", href: "/deno-x-ranking/favicon.ico" }),
        React.createElement("link", { rel: "apple-touch-icon", href: "/deno-x-ranking/favicon-192.png" })),
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
