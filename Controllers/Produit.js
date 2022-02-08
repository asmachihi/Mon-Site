const Produit = require('../Models/Produit')


//l'affichage de tous les contacts
exports.getProduits = async (req,res) => {
    try {
        //chercher la liste a l'aide de la fonction prédéfinie find
        const produits = await Produit.find();
        //retour du message +
        res.status(200).send({msg:"La liste des produits",produits});
    } catch (error) {
        //retour message d'erreur
        res.status(400).send({msg:"Impossible d'afficher la liste des produits",error})
    }
}


//affichage d'un seul produit
//on va utiliser req.params pour récuperer l'id
//methode GET

exports.getProduit = async(req,res)=>{
    const {ID} = req.params
    try {
        const produit = await Produit.findById({_id:ID})
        res.status(200).send({msg:"Le produit",produit})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'afficher ce produit",error})
    }
}

