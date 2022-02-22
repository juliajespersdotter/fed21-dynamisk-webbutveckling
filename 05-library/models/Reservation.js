const bookshelf = require('./bookshelf');

const Reservation = bookshelf.Model.extend(
    {
        tableName: 'Reservation'
    }
);

module.exports = Reservation;