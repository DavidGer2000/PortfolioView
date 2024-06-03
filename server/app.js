const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const cookieParsesr = require("cookie-parser");
const {config} = require("./data/secret");

const {routesInit} = require("./routes/configRoutes")
require("./data/mongoConnect")

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cors({
    origin:true,
    credentials:true
}));
app.use(cookieParsesr());


routesInit(app);

const server = http.createServer(app);
let port = config.port || "3012";
server.listen(port);