const bookshelf = require('./bookshelf');

const PokemonBattles = bookshelf.Model.extend(
    {
        tableName: 'PokemonBattles'
    }
);

module.exports = PokemonBattles;