
const database = require('./database/mysql');
module.exports = {
    save: async (object, tableName) => {
        var query = "";
        var results = database.query(query);
    },

    findAll: async (object, tableName) => {
        
    },

    findById: async (object, tableName) => {
        
    },

    update: async (object, tableName) => {
        
    },

    delete: async (object, tableName) => {
        
    }
}