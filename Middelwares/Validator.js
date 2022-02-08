const {body , validationResult } = require('express-validator')

exports.registerRules = [

    // le nom ne doit pas etre vide
    body ('nom',"Nom obligatoire").notEmpty(),

    //Respect du syntaxe de l'email
    body ('email',"E-mail invalide").isEmail(),

    //specifier la longueur du mot de passe
    body('motdepasse',"Le mot de passe doit contenir au minimum 6 charactéres").isLength({min:6})
]

exports.loginRules = [
      // faire les tests sans spécifier mot de passe au email pour la sécurité de l'utilisateur
     //Respect du syntaxe de l'email
     body ('email',"Informations incorrectes").isEmail(),

     //specifier la longueur du mot de passe
     body('motdepasse',"Informations incorrectes").isLength({min:6})
]

exports.Validator = (req,res,next) => {
    const result = validationResult (req)
    if (!result.isEmpty()){
        return res.status(400).send({errors:result.array()})
    }
    next()
}