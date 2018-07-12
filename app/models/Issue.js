const bookshelf = require('../../database');
const Status = require('./Status').Status;
const Tracker = require('./Tracker').Tracker;
const { Project } = require('./Project');

module.exports.Issue = bookshelf.Model.extend({
    tableName: 'issues',
    project: function() {
        return this.belongsTo(Project);
    },
    tracker: function() {
        return this.belongsTo(Tracker);
    },
    status: function() {
        return this.belongsTo(Status, 'status_id');
    }
});