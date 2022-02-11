const PokemonFriends = require('./PokemonFriends');

PokemonFriends.fetchAll().then((result) => {
    console.log(result);
    console.log(result.toJSON());
});

PokemonFriends.count().then((count) => {
    console.log('Vi har nu ' + count + ' Pokemon vänner!');
});

/*
for (let i = 1; i < 11; i++) {
    const friend = {
        name: 'name'+i,
        email: 'name'+i+'@email.com'
    };
    let newFriend = new PokemonFriends(friend);
    newFriend.save().then((res) => {
    console.log(res);
})
}
*/
// Delete all 
PokemonFriends.where("name", "LIKE", "name%").fetchAll().then((result) =>{
    console.log(result.toJSON());
    // Loopa igenom alla resultaten
    result.forEach(model => {
        model.destroy().then();
    });
})


// PokemonFriends.where(friend).fetchAll().then((collection) => {
//     console.log(collection.toJSON());
// });

/*
const attribute = {
    name: 'Skrelp',
    hp: 50
};

let Skrelp = new PokemonFriends(attribute);
Skrelp.save().then((res) => {
    console.log(res);
});
*/
// destroy() -- för att radera
