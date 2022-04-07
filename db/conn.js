const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})


mongoose.connect(process.env.MONGO_URL,{
     useNewUrlParser: true,
     
}).then(() => {
    console.log('connection to db is success');
}).catch((err) => {
    console.log('connection to db is failure');
    console.log(err);
})
