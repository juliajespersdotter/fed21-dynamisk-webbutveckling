const PokemonCards = require('./PokemonCards');

PokemonCards.fetchAll().then((collection) => {
    console.log(collection);
    console.log(collection.toJSON());
});