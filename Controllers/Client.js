const Client = require('../Models/Client')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')



//affichage de la liste des clients
exports.getClients = async(req,res)=>{
    try {
        const clients = await Client.find()
        res.status(200).send({msg:"La liste des contacts",clients})
        
    } catch (error) {
        res.status(400).send({msg:"Impossible d'afficher la liste des contacts",error})
    }
}


//ajout d'un nouveau client
exports.ajoutClient = async(req,res) =>{
    const {nom,email,prenom,num_tel,motdepasse} = req.body
    try {
        //on va tester l'existance de ce client avec l'email
        const findClient = await Client.findOne({email})
        if (findClient){
            return res.status(400).send({errors:[{msg:'Ce client existe déjà'}]})
        }
        //sinon on passe à la creation du compte
        const newClient = await new Client({
            nom,email,prenom,num_tel,motdepasse
        })
        newClient.save()
        res.status(200).send({msg:"Client ajouté avec succées",newClient})
        
    } catch (error) {
        res.status(400).send({msg:"Impossible d'ajouter ce client",error})
    }
}

//Mise à jour des informations du client
exports.updateClient = async(req,res) =>{
    try {
        const {ID} = req.params
        //on utilise $set et ... pour garder les informations qu'on n'a pas modifier
        const putClient = await Client.findByIdAndUpdate({_id:ID},{$set:{...req.body}})
        res.status(200).send({msg:"Informations modifiées avec succées",putClient})
    } catch (error) {
        res.status(400).send({msg:"Impossible de modifier les informations de ce client",error})
    }
}


//Création d'un nouveau compte "inscription"
exports.signUp = async (req,res) =>{
    const {nom,prenom,email,num_tel,motdepasse}=req.body
    try {
        //on cherchera l'existance du compte
        const findClient = await Client.findOne({email})
        //si oui on doit quitter
        if (findClient){
            return res.status(400).send({errors:[{msg:"Compte existe déjà"}]})
        }
        //si non on va créer un nouveau compte
        const client = new Client ({
            nom,prenom,email,num_tel,motdepasse
        })

        // on va crypté le mot de passe a l'aide du package "bcrypt"
        const salt = 10
        const hash = await bcrypt.hash(motdepasse,salt)
        client.motdepasse = hash

        //on enregistre les nouveaux données 
        await client.save()

        //on récupére l'id de payload
        const payload = {
            id : client._id
        }

        //on va créer un token a l'aide de la fonction prédéfinie "sign()"
        const token = await jwt.sign(payload,process.env.secretKey,{expiresIn:"12h"})
        
          // on affiche le message OK et on attribut le nouvel utilisateur 'user' et on rajoute le 'token' afin de crypté le mp
          res.status(200).send({msg:"Client enregistré avec succées",client,token})

    } catch (error) {
        res.status(400).send({errors:[{msg:"Impossible de s'inscrire"}]})
    }
}

//connexion au compte
exports.signIn = async(req,res)=>{
    const {email,motdepasse} = req.body

    try {
        //on vérifie l'absence du compte
        const client = await Client.findOne({email})
        if (!client){
            return res.status(400).send({errors:[{msg:"Compte introuvable"}]})
        }

        //comparaison du mot de passe saisie avec le mot de passe crypté
        const match = await bcrypt.compare(motdepasse,client.motdepasse)
        
        //on vérifie l'existance du mot de passe
        if(!match){
            return res.status(400).send({errors:[{msg:"Compte introuvable"}]})
        }

        //récupération de l'id généré par la DB
        const payload = {
            id : client._id
        }

        const token = jwt.sign(payload,process.env.secretKey,{expiresIn :"12h"})
        res.status(200).send({msg:"Client connecté",client,token})
        
        
    } catch (error) {
        res.status(400).send({errors:[{msg:"Impossible de se connecter"}]})
    }
}