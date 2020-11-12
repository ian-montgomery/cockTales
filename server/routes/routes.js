const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/', (req, res) => {
    db.getTale()
        .then(tale => {
            res.json(tale)
        })
        .catch((err) => {
            res.status(500).json({message: 'There was a problem finding the rules...'} )
        })
})

module.exports = router