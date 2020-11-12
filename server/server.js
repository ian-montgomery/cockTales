const path = require('path')
const express = require('express')

const server = express()

const drinks = require('./routes/drinks')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/drinks', drinks)


module.exports = server
