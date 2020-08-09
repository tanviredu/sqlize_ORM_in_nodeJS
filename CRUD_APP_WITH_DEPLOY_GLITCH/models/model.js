const Sequelize  = require("sequelize");
const connection = require("./db");

const Todo = connection.define("Todo",{
    uuid    : {
        type         : Sequelize.UUID,
        primaryKey   : true,
        defaultValue : Sequelize.UUIDV4
    },
    content : {
        type         : Sequelize.TEXT
    }

});


module.exports = Todo;