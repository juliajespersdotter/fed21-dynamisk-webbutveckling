const bookshelf = require('./bookshelf');

const Titles = bookshelf.Model.extend(
    {
        tableName: 'Titles'
    }
);

module.exports = Titles;