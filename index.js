const express = require('express');
const app = express();

global.rootPath = __dirname;

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

require('emran-hbs-config')(app, __dirname);

require('./router.js')(app);


// for compatibility with Heroku
var port = process.env.PORT || 4000;

console.log('Listening on port: ' + port);
app.listen(port);
