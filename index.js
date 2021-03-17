const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const compression = require("compression");
const port = process.env.PORT || 4000;
const stage = process.env.STAGE || "dev";
const app = express();
const api = process.env.API_URL || "http://127.0.0.1:3333/api";
// `https://hub.springer-sbm.com/${stage}/snics/services/api`;
// "http://localhost:3000/api";
//"https://snics-api-dev.springernature.app/api";

app.use(compression());

app.use(express.static(__dirname + "/dist"));

const options = {
	target: api,
	changeOrigin: true,
	ws: true,
	pathRewrite: {
		"^/api": "/",
	},
};

app.use(new RegExp("^/api"), createProxyMiddleware(options));

app.get("*", (request, response) => response.sendFile(path.resolve(__dirname + "/dist/index.html")));

app.listen(port, () => console.log(`The app listening on port ${port}!`));

console.log("End");
