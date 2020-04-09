const db = require('../data/db-config')

module.exports = {
    add,
    getAll,
    findById,
    remove,
    update,
    getCount,
    getUserPuzzles,
    getAllApproved
}



function getAll() {
    return db('wordlists')
}

function findById(id) {
    return db('wordlists')
        .where({id})
        .first()
}

function add(wordlist) {
    return db('wordlists').insert(wordlist).returning("*")

}

function update(id, changes) {
    return db('wordlists')
        .where({id})
        .update(changes, '*').returning("*");
}

function remove(id) {
    return db('wordlists')
        .where({ id })
        .first()
        .del();
}


function getAllApproved() {
    return db('wordlists').where({approved: true})
}

function getUserPuzzles(user_id) {
    return db('wordlists').where({user_id})
}

function getCount() {
    return db('wordlists').count("id as CNT")
}
