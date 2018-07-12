const bookshelf = require('../../database');

module.exports.Project = bookshelf.Model.extend({
    tableName: 'projects'
});