const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const produitSchema = new Schema({
    nom:{
        type:String,
        required:true
    },
    prix:{
        type:Number,
        required:true
    },
    image:{
        type:String
    },
    categorie:{
        type:String
    },
    cloudinary_id:{
        type:String
    }
});

module.exports = mongoose.model('Produit',produitSchema)