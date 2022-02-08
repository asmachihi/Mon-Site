const mongoose = require('mongoose');

const Schema = mongoose.Schema

const panierSchema = new Schema({
    produits:[String],
    totalPrix : Number
});


module.exports = mongoose.model ('Panier',panierSchema)