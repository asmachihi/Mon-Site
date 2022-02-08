const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema  = new Schema({
    nom :{
        type:String,
        required:true
    },
    prenom :{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    motdepasse:{
        type:String,
        required:true
    },
    num_tel:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model('Client',clientSchema)
