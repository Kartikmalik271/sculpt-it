const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const uri = "mongodb+srv://kartik:shalu@cluster0.aa4iw.mongodb.net/portfolio?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
require('dotenv').config();

app.use(cookieParser());
app.use(express.json());

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
}).then(()=>{
    console.log('database connected')
});

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(PORT ,()=>{
    console.log('server is running')
})

