const Contact = require('../Models/Contact')


//l'affichage de tous les contacts
exports.getContacts = async (req,res) => {
    try {
        //chercher la liste a l'aide de la fonction prédéfinie find
        const contacts = await Contact.find();
        //retour du message +
        res.status(200).send({msg:"La liste des contacts",contacts});
    } catch (error) {
        //retour message d'erreur
        res.status(400).send({msg:"Impossible d'afficher la liste des contacts",error})
    }
}

//ajouter un nouveau contact
//l'utilisation de req.body pour récupérer les informations 
exports.ajoutContact = async (req,res) => {
   const {nom,email,nom_societe,num_tel,message} = req.body ;
    try {
        //création du nouveau contact
        const newContact = await new Contact( {
            nom,email,nom_societe,num_tel,message
        });
        //enregistrement des informations saisi
        newContact.save();
        //retour du message +
        res.status(200).send({msg:"ajout du contact avec succées",newContact})
    } catch (error) {
        //retour message d'erreur
        res.status(400).send({msg:"Impossible d'ajouter ce contact",error})
    }
}