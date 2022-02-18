const bookshelf = require('./bookshelf');
const PokemonCards = require('./PokemonCards');

const PokemonFriends = bookshelf.Model.extend(
    {
        tableName: 'PokemonFriends',
        cards() {
            return this.belongsToMany(PokemonCards, 'PokemonFriendCards')
        }
    }
);

module.exports = PokemonFriends;