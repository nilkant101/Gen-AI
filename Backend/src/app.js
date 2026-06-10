require("dotenv").config();
const express = require('express');
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express();

app.use(express.json()); //data parse req.body madhe
app.use(cookieParser()); //data parse req.body madhe
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

// require all the routes here
const authRouter = require("./routes/auth.routes")

//  all auth pasess thriugh this
app.use("/api/auth", authRouter)

module.exports = app;