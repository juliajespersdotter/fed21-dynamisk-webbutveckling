const bookshelf = require('./bookshelf');

const Books = bookshelf.Model.extend(
    {
        tableName: 'Books'
    }
);

module.exports = Books;