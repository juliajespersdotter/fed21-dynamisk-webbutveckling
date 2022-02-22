const bookshelf = require('./bookshelf');

const Users = bookshelf.Model.extend(
    {
        tableName: 'Users'
    }
);

module.exports = Users;