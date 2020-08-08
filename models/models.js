const Sequelize  = require("sequelize");
const connection = require("./db");

const User = connection.define("User",{
    // we can add a unique key as the id called uuid 
    // if we want
    uuid:{
        type         : Sequelize.UUID,
        primaryKey   : true,
        defaultValue : Sequelize.UUIDV4
    },
    name : Sequelize.STRING,
    bio  : Sequelize.TEXT
})

module.exports = User;
