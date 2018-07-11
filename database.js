const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host     : 'dokkan8.com',
        user     : 'kaizen',
        password : 'password',
        database : 'kaizen',
        charset  : 'utf8'
    }
});

knex.on('query', function(queryData) {
    console.log( queryData );
});

module.exports = require('bookshelf')(knex);