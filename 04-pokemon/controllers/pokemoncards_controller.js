
const PokemonCards = require('../models/PokemonCards');

const read = async(req, res) => {
    try {

        let card;

        if (req.params.id) {
            card = await PokemonCards.where({ "id" : req.params.id }).fetch();
        } else {
            card = await PokemonCards.fetchAll();
        }

        return res.status(200).send({
            success: true,
            data: {
                card
            }
        });

    } catch(err) {
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
}

module.exports = {
    read
}