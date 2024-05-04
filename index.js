require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { log } = require("console");

const PORT = process.env.PORT || 8000;

//middleware start
const app = express();
app.use(express.json());
app.use(cors);
// middleware end

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});
