const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routers/route')
const cors = require("cors");


const port = process.env.PORT || 5000
const app = express()
dotenv.config({path: './config.env'})
require('./db/conn')
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", authRoutes);


if (process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"))
}
app.listen(port,()=>{
    console.log(`server is on port ${port}`);
})