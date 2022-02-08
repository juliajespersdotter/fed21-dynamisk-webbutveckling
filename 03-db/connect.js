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
    if(err) throw err;

    console.log("Anslutit till databasen!! Party party!");
});