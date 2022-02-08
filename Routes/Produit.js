const express = require('express');
const {getProduits} = require('../Controllers/Produit')
const {getProduit} = require('../Controllers/Produit')
const Produit = require('../Models/Produit')
const router = express.Router();
const cloudinary = require('../Utils/Cloudinary')
const upload = require('../Utils/Multer')


//ajout d'un nouveau produit
router.post('/ajout',upload.single("image"), async (req,res)=>{
    try {
        //création du nouveau contact
        const upimg = await cloudinary.uploader.upload(req.file.path)

        const newProduit = new Produit( {
            nom:req.body.nom,
            prix:req.body.prix,
            image:upimg.secure_url,
            cloudinary_id:upimg.public_id
        });

        //enregistrement des informations saisi
        await  newProduit.save();
        res.json(newProduit)
        //retour du message +
        res.status(200).send({msg:"produit ajouté avec succées",newProduit})
    } catch (error) {
        //retour message d'erreur
        res.status(400).send({msg:"Impossible d'ajouter ce produit",error})
    }
});


//affichage de la liste des produits
router.get('/',getProduits)


//appel de la fonction getProduit
router.get('/:ID',getProduit)


//Suppression d'un produit
router.delete('/:id', async (req,res)=>{
    try {
        //chercher l'utilisateur par id
        const produitsup = await Produit.findById(req.params.id)

        //supprimer l'image de cloudinary
        await cloudinary.uploader.destroy(produitsup.cloudinary_id)

        //supprimer le produit de la base de données
        await produitsup.remove()
        res.json(produitsup)

        //retour du message +
        res.status(200).send({msg:"produit supprimé avec succées",produitsup})


    } catch (error) {
        //retour message d'erreur
        res.status(400).send({msg:"Impossible de supprimer ce produit",error})
    }
})

//modification d'un produit
router.put('/:id', upload.single("image"),async(req,res)=>{
    try {
        //chercher le produit à modifier
        const produitput = await Produit.findById(req.params.id)
        
        //supprimer l'image à modifier de cloudinary
        await cloudinary.uploader.destroy(produitput.cloudinary_id)

        //telecharger une nouvelle image
        let result 
        if (req.file){
          result = await cloudinary.uploader.upload(req.file.path)
        }
        

        //création des nouveaux données
        const data ={
            nom:req.body.nom || produitput.nom,
            prix:req.body.prix || produitput.prix,
            image:result.secure_url || produitput.image,
            cloudinary_id:result.public_id || produitput.cloudinary_id
        }

        //chercher l'element en question et lui attrubué les nouveaux données
        produitput = await Produit.findByIdAndUpdate(req.params.id,data,{new : true})
        res.json(produitput)

        //retour du message +
        res.status(200).send({msg:"produit modifier avec succées"})
    } catch (error) {
          //retour message d'erreur
          res.status(400).send({msg:"Impossible de modifier ce produit",error})
    }
})

module.exports = router