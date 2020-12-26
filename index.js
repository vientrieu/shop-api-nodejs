const express = require('express');
const path = require('path');
const config = require('./config/config');
const bodyParser = require('body-parser');
const connect = require('./database/mysql');
const PORT = config.PORT;
const URL = config.MONGO_URL;
const CONNECTION_CONFIG = config.CONFIG_MYSQL;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));
// connect.connnect(CONNECTION_CONFIG);
require('./middleware/routes.mdw')(app);
app.listen(PORT||process.env.PORT, () => {
    console.log(__dirname);
    console.log("server use port ", PORT);
})