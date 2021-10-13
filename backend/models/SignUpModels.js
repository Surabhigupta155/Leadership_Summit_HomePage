const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Registration',signUpTemplate)
