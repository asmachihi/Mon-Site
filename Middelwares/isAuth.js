const jwt = require('jsonwebtoken')
const User = require('../Models/Client')

exports.isAuth = async(req,res,next) =>{
 
    const token = req.headers["autorisé"]

    try {
        if(!token){
            return res.status(400).send({errors:[{msg:"Vous n'etes pas autorisé"}]})
        }

        const decoded = jwt.verify(token,process.env.secretKey)
        const client = await User.findById(decoded.id)

        if(!client){
            return res.status(400).send({errors:[{msg:"Vous n'etes pas autorisé"}]})
        }

        req.client = client
        next()
    } catch (error) {
        return res.status(400).send({errors:[{msg:"Vous n'etes pas autorisé"}]}) 
    }

}