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
            __html: '<input type="text" id="searchBox" onkeyup="search()" placeholder="Search for keywords...">\n<table>\n<thead>\n<tr>\n<th>👑</th>\n<th>Repository</th>\n<th>Stars</th>\n<th>Forks</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><a href="https://github.com/zhmushan/abc">zhmushan/abc</a></td>\n<td>418</td>\n<td>41</td>\n<td>A better Deno framework to create web application.</td>\n</tr>\n<tr>\n<td>2</td>\n<td><a href="https://github.com/maheshkareeya/a1">maheshkareeya/a1</a></td>\n<td>2</td>\n<td>0</td>\n<td>A1 Is Javascript Micro framework for rapid API Development</td>\n</tr>\n<tr>\n<td>3</td>\n<td><a href="https://github.com/deepakshrma/30-seconds-of-typescript">deepakshrma/30-seconds-of-typescript</a></td>\n<td>1</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>4</td>\n<td><a href="https://github.com/being-curious/a0">being-curious/a0</a></td>\n<td>0</td>\n<td>0</td>\n<td>a0 - A command line utility to manage text/number/email/password/address/note with Alias to easy recall &amp; copy to clipboard.</td>\n</tr>\n</tbody>\n</table>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/deno-x-ranking/index.js", type: "module" })),
    'toc': null
};
