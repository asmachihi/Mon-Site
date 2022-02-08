const express = require('express');
const {ajoutContact, getContacts} = require('../Controllers/Contact')
const router = express.Router();

router.post('/',ajoutContact);

router.get('/',getContacts)


module.exports = router