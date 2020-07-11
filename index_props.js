import Ga from '/deno-x-ranking/_ga.js';
import projectConfig from '/deno-x-ranking/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-149348992-3" }),
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<table>\n<thead>\n<tr>\n<th>👑</th>\n<th>Repository</th>\n<th>Stars</th>\n<th>Forks</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody></tbody>\n</table>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/deno-x-ranking/index.js", type: "module" })),
    'toc': null
};
