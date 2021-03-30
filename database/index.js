const knexfile = require('../knexfile');
const Knex = require('knex')(knexfile.development);

// npx knex init
//pra n ter q confg nd alem de um json

// migrations knex migrate:make create_table_users
// cria a tabeka da migration

//npx knex migrate:latest
//fas migrate pra ultima versão

//npx knex seed:make 001_users
//seed serve para popula o db

//npx knex seed:run
//npx knex seed:run --specific seu seed name paraa rodar somente ela
//ativa o script de popular o db

module.exports = Knex;