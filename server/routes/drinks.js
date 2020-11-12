const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/:alcohol', (req, res) => {
    const alcohol = req.params.alcohol
    db.getTale(alcohol)
        .then(tale => {
            res.json(tale)
        })
        .catch((err) => {
            res.status(500).json({message: 'There was a problem finding the tale...'} )
        })
})

module.exports = router