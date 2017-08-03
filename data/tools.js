'use strict';
// this data is now being pulled from mongoDb

const tools =
{ "tools":
	[
		{ "tool": "React", "logo":  "react.svg", "url": "http://facebook.github.io/react", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/React_(JavaScript_library)", "desc": "In computing, React (sometimes styled React.js or ReactJS) is an open-source JavaScript library[2] for building user interfaces."},
		{ "tool": "Node", "logo":  "nodejs.png", "url": "https://nodejs.org/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/Node.js", "desc" : "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side."},
		{ "tool": "Express", "logo":  "express.jpg", "url": "http://expressjs.com/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/Express.js", "desc" : "Express.js, or simply Express, is a web application framework for Node.js..."},
		{ "tool": "Axios", "logo":  "axios.png", "url": "https://github.com/mzabriskie/axios", "source": "npm.js", "sourceUrl": "https://www.npmjs.com/package/axios", "desc" : "Promise based HTTP client for the browser and node.js."},
		{ "tool": "Foundation", "logo":  "foundation.png", "url": "http://foundation.zurb.com/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/Foundation_(framework)", "desc" : "Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components, templates, and code snippets..."},
		{ "tool": "Webpack", "logo":  "webpack.png", "url": "https://webpack.js.org/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/Webpack", "desc" : "Webpack is an open-source JavaScript module bundler."},
		{ "tool": "Github", "logo":  "octocat-1.png", "url": "https://github.com/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/GitHub", "desc" : "GitHub is a web-based Git or version control repository and Internet hosting service."},
		{ "tool": "Heroku", "logo":  "heroku-2.png", "url": "http://heroku.com/", "source": "wikipedia.org", "sourceUrl": "https://en.wikipedia.org/wiki/Heroku", "desc" : "Heroku is a cloud platform as a service (PaaS) supporting several programming languages that is used as a web application deployment model."}
	]
};

module.exports = tools;