require('dotenv').config();
const mysql = require('mysql');

const knex = require('knex');
const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

connection.select().table('PokemonCards').then((result) => {
    console.log(result);
    result.forEach(r => {
        console.log('Pokemon har namnet ' + r.name + ' med hp till ' + r.hp);
    })
});

/*
connection.select('id', 'name').table('PokemonCards').then((result) => { // SELECT * FROM PokemonCards
    console.log(result);
});
*/

/*
// SELECT id, name FROM PokemonCards WHERE id = 2
connection.select('id', 'name', 'hp').where({id: 2}).orWhere({id: 4}).table('PokemonCards').then((result) => { 
    console.log(result);
});
*/
/*
// SELECT id, name FROM PokemonCards WHERE id IN (2, 4, 6)
connection.select('id', 'name', 'hp').whereIn('id', [2, 4, 6]).table('PokemonCards').then((result) => { 
    console.log(result);

});
*/

/*
// SELECT * FROM PokemonCards WHERE id = 1
connection('PokemonCards').where('id', 1).select().then((result) =>{
    console.log(result);
});
*/

/*
connection('PokemonCards').insert({name: 'Nodemon', hp: 163}).finally((result) => {
    console.log(result);
});
*/

// "Fulhack" för att stänga server, alt använd nodemon
/*
const s = 1;
setTimeout(
    () => { process.exit(0); },
        s*1000
);
*/