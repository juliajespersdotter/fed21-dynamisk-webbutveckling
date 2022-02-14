const Titles = require('./Titles');

Titles.fetchAll().then((result) => {
    console.log(result);
    console.log(result.toJSON());
});

Titles.count().then((count) => {
    console.log('We now have ' + count + ' books in circulation.');
});

