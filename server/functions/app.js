const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const morgan = require("morgan");
const { xss } = require('express-xss-sanitizer');
const bodyParser = require('body-parser');

const { fetchImages } = require("./services/googleSearch");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("client"));
app.use(bodyParser.json({limit:'1kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'1kb'}));
app.use(xss());

app.get("/.netlify/functions/app", async (req, res, next) => {
    res.status(200).send("Dasima web server");
})

app.get("/.netlify/functions/app/api/images/", async (req, res, next) => {
    const term = req.query.q;
    const start = req.query.start;
    const imagesToSearch = req.query.num;
    const fileTypeOption = req.query.fileType;
    let allImages = await fetchImages(term, start, imagesToSearch, fileTypeOption);
    res.status(200).json(allImages);
})

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

module.exports.handler = serverless(app);