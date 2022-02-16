const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend(
    {
        tableName: 'User'
    }
);

module.exports = User;