require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const users = require("./models/userSchema");
const cors = require("cors");
const app = express();
require("./db/conn")
const port = 5000;
const router= require("./routes/router");


app.use(cors());
app.use(express.json());
app.use(router);




app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});
