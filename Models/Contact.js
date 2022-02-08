const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nom_societe:{
        type:String,
        required:true 
    },
    num_tel:{
        type:Number,
        required:true 
    },
    message:{
        type:String,
        required:true 
    }
});

module.exports = mongoose.model('Contact',contactSchema)