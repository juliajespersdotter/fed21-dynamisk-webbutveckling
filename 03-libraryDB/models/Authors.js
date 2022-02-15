const bookshelf = require('./bookshelf');

const Authors = bookshelf.Model.extend(
    {
        tableName: 'Authors'
    }
);

module.exports = Authors;