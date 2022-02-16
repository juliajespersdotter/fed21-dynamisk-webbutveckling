const bookshelf = require('./bookshelf');
const titles = require('./Titles');

const Authors = bookshelf.Model.extend(
    {
        tableName: 'Authors',
        hasWritten() { // definierar en metod
            return this.hasMany(titles, 'authorId');
        },
        // lostBattles(){
        //     return this.hasMany(PokemonBattles, 'losingPokemon');
        // }
    }
);

module.exports = Authors;