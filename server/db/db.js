const config = require('../../knexfile').development
const db = require('knex')(config)

function getTale(drink) {
    return db('drinks')
        .where('name', drink)
        .select('*')
}

module.exports = {
    getTale
}