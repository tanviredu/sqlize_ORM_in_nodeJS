const Sequelize  = require("sequelize");
const connection = require("./db");

const User = connection.define("User",{
    name : Sequelize.STRING,
    bio  : Sequelize.TEXT
})
