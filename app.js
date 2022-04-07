const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routers/route')


const app = express()
dotenv.config({path: './config.env'})
require('./db/conn')
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);



app.get('/',(req,res) => {
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
    res.sendFile(path.resolve(path.resolve(__dirname, 'frontend', 'build','index.html')))
})

app.get('/signin',(req,res) => {
    res.send('Welcome to signin page')
})

app.get('/signup',(req,res) => {
    res.send('Welcome to signup page')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is on port ${process.env.PORT}`);
})