const bookshelf = require('../../database');

module.exports.Status = bookshelf.Model.extend({
    tableName: 'issue_statuses'
});