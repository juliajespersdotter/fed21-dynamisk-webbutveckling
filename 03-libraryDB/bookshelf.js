// Ansluter till databasen mha bookshelf
// Ger oss ett objekt man kan använda vid kommunikation med databasen
require ('dotenv').config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

module.exports = require('bookshelf')(knex);