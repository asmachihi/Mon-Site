const express = require('express');
const serveur = express();
const connectDB = require('./Config/connectDB')
const contactRouter = require('./Routes/Contact')
const produitRouter = require('./Routes/Produit')
const clientRouter = require('./Routes/Client')


//connexion à la base de données
connectDB()

//utilisation de json pour la visibilé des données
serveur.use(express.json());


//heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
  }

//appel au fonctionnalité des produits
serveur.use('/api/produit',produitRouter)

//appel au fonctionnalité de contact
serveur.use('/api/contact',contactRouter)

//appel au fonctionnalité de client
serveur.use('/api/client',clientRouter)

//connexion au serveur
const PORT = 5000;
serveur.listen(PORT, ()=> console.log( `Seveur connecté au port ${PORT}`))