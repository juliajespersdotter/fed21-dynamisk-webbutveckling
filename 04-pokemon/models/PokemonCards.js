const bookshelf = require('./bookshelf');
const PokemonBattles = require('./PokemonBattles');

const PokemonCards = bookshelf.Model.extend(
    {
        tableName: 'PokemonCards',
        wonBattles() { // definierar en metod
            return this.hasMany(PokemonBattles, 'winningPokemon');
        },
        lostBattles(){
            return this.hasMany(PokemonBattles, 'losingPokemon');
        }
    }
);

module.exports = PokemonCards;