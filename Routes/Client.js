const express = require('express')
const { ajoutClient, getClients, updateClient, signUp, signIn } = require('../Controllers/Client')
const { isAuth } = require('../Middelwares/isAuth')
const {Validator,registerRules,loginRules} = require('../Middelwares/Validator')
const router = express.Router()

router.post('/',ajoutClient)

router.get('/',getClients)

router.put('/:ID',updateClient)

router.post('/signUp',registerRules,Validator,signUp)

router.post('/signIn',loginRules,Validator,signIn)

router.get('/current',isAuth,(req,res)=>res.send({client:client.req}))

module.exports = router