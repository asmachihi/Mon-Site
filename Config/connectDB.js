const mongoose = require('mongoose');
require('dotenv').config({path:'./Config/.env'})

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Base de données connectée')
        //verification de l'etat de connexion 1 connecté 0 non
        // console.log(mongoose.connection.readyState)
    } catch (error) {
        console.log('Impossible de se connecter à la base de données')
    }
}

module.exports = connectDB