const chokidar = require('chokidar');
const watcher = chokidar.watch('./app');
const express = require('express')
const app = express();

watcher.on('ready', function() {
    watcher.on('all', function() {
        console.log("Clearing /app/ module cache from server")
        Object.keys(require.cache).forEach(function(id) {
            if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
        })
    })
});

app.use(function (req, res, next) {
    require('./app/app.js')(req, res, next);
});

app.listen(8000, () => {
    console.log('Go to /graphiql to run queries!');
});