const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "Pokémon"
    }
);

con.connect(err => {
    if(err) {
        throw err;
    }

    console.log("Anslutit till databasen!! Party party!");

    con.query("SELECT id, name, hp FROM PokemonCards", ((err, result) => {
        if (err) {
            throw err;
        }

        console.log('Publiken vi har ett resultat!');
        console.log(result);
    }));
});