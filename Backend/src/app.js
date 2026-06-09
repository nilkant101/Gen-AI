require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json()); //data parse req.body madhe
app.use(cookieParser()); //data parse req.body madhe




// require all the routes here
const authRouter = require("./routes/auth.routes")

//  all auth pasess thriugh this
app.use("/api/auth", authRouter)

module.exports = app;