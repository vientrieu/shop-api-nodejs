var mysql = require('mysql');
const config = require('./config/config');
const CONNECTION_CONFIG = config.CONFIG_MYSQL;
module.exports = {
  query: (queryString) => {
    var connect = mysql.createConnection(CONNECTION_CONFIG);
    connect.connect(function(err) {
      if (err) throw err;
      console.log("Connected MySQL!");
    });
    connect.query(queryString, (err, results) => {
      if(err) throw err;
      return results;
    });
    connect.end();
  }
}