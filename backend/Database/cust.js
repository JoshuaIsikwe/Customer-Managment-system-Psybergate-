const knex = require('./knex');

function createCustomer (customer) {
    return knex("customers").insert(customer);
};

function getAllCustomers () {
    return knex("customers").select("*");
};
function getCustomer (id) {
    return knex("customers").select("*").where('id', id).first();
};

function deleteCustomer (id) {
    return knex("customers").where('id', id).del();
};

function updateCustomer (id, car) {
    return knex("customers").where('id', id).update();
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer
}