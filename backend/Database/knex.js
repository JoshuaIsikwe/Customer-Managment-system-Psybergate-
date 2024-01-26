const knex = require("knex")

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'psy.sqlite3'
    }
});

module.exports = connectedKnex