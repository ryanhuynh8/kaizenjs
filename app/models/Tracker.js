const bookshelf = require('../../database');

module.exports.Tracker = bookshelf.Model.extend({
    tableName: 'trackers'
});