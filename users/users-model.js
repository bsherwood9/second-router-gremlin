const db = require("../data/db-config.js");


module.exports = {
    getAll,
    findById,
    remove,
    updateUser,
    add
}


function getAll() {
    return db('users')
}

function findById(id) {
    return db('users')
        .where({id})
        .first()
}

async function add(user) {
    return db('users').insert(user).returning("*")
}

function updateUser(id, changes) {
    return db('users')
        .where({id})
        .update(changes, '*').returning("*");
}

function remove(id) {
    return db('users')
        .where({ id })
        .first()
        .del();
  }

