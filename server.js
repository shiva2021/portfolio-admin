const express = require('express')
const app = express();
const serverStatic = require("serve-static");

const path = require('path');

app.use('/', serverStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080;

app.listen(port);