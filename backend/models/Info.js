const mongoose = require('mongoose');

const InfoSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    number:{
        type: String,
       
    },
    email:{
        type: String,
       
    },
    gender:{
        type: String,
        required:true

    },
    dob:{
        type: String,
        required:true

       
    },
    bloodgrp:{
        type: String,
       
    },
    descp:{
        type: String,
       
    },
    github:{
        type: String,
       
    },
    insta:{
        type: String,
       
    },
    linkedin:{
        type: String,
       
    },
    insta:{
        type: String,
       
    },
    fb:{
        type: String,
       
    }
});

module.exports = mongoose.model('Info',InfoSchema)