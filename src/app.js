require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json()); //data parse req.body madhe


// require all the routes here
const authRouter = require("./routes/auth.routes")

//  all auth pasess thriugh this
app.use("/api/auth", authRouter)

module.exports = app;