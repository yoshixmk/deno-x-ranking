import projectConfig from '/deno-x-ranking/pagic.config.js';
import Ga from '/deno-x-ranking/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'develop' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<input type="text" id="searchBox" onkeyup="search()" placeholder="Search for keywords...">\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>👑</th>\n<th>Repository</th>\n<th>Stars</th>\n<th>Forks</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody></tbody>\n</table></div>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-149348992-3" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { href: "/deno-x-ranking/custom.css", rel: "stylesheet" }),
            React.createElement("script", { async: true, defer: true, src: "/deno-x-ranking/custom.js", type: "text/javascript" }),
            React.createElement("link", { href: "/deno-x-ranking/favicon.ico", rel: "icon", type: "" }),
            React.createElement("link", { href: "/deno-x-ranking/favicon-192.png", rel: "apple-touch-icon" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/deno-x-ranking/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<input type="text" id="searchBox" onkeyup="search()" placeholder="Search for keywords...">\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>👑</th>\n<th>Repository</th>\n<th>Stars</th>\n<th>Forks</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody></tbody>\n</table></div>'
        } }),
    'toc': null,
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2020-12-27T13:00:44.000Z",
    'updated': null,
    'excerpt': "👑 Repository Stars Forks Description",
    'cover': undefined
};
