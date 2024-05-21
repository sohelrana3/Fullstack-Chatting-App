require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./router/authRouter");
const { error, log } = require("console");

const PORT = process.env.PORT || 8000;

//middleware start
const app = express();
app.use(express.json());
app.use(cors());
// middleware end

//route

app.use("/api", authRouter);

mongoose
  .connect(
    "mongodb+srv://sohel:sohel@mern-state.ier4ijb.mongodb.net/?retryWrites=true&w=majority&appName=mern-state"
  )
  .then(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running ${PORT}`);
      console.log("Database connect");
    });
  })
  .catch((error) => {
    console.log("Database connect failed", error);
  });
