require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

con.connect(err => {
    if(err) {
        throw err;
    }

    console.log("Anslutit till databasen!! Party party!");
    let sql = "SELECT id, name, hp FROM PokemonCards";
    sql = sql + " WHERE id = 2";

    con.query(sql, ((err, result) => {
        if (err) {
            throw err;
        }

        console.log('Publiken vi har ett resultat!');
        console.log(result);

        /*
        // show result with foreach or for-loop
        result.forEach(r => {
            console.log('Pokémon har namnet ' + r.name + ' med hp till ' + r.hp);
        });
        
        for (let i = 0; i < result.length; i++) {
            const r = result[i];
            console.log('Pokémon har namnet ' + r.name + ' med hp till ' + r.hp);
        }
        */

        // Disconnect from database
        con.end();
    }));
});

console.log(process.env);