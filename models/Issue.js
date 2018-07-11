const bookshelf = require('../database');

module.exports.Issue = bookshelf.Model.extend({
    tableName: 'issues'
});