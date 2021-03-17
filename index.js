const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const compression = require("compression");
const port = process.env.PORT || 4000;
const cors = require('cors')
const app = express();
const api = process.env.API_URL || "https://pf-admin-api.herokuapp.com/api";

let corsOptions = {
	origin: process.env.API_ORIGIN || 'https://pf-admin-api.herokuapp.com',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

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
