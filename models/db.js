const Sequelize = require("sequelize");
const config    = require("../config");



const connection = new Sequelize(config.dbname,config.user,config.password,{
    host     : config.host,
    dialect  : config.dialect,
    storage  : config.storage,
    opratorsAliases:config.aliases,
    // we add a define property
    // so the table name and the variable name match
    define:{
        freezeTableName:true
    } 
})


connection.sync().then(()=>{
    console.log("Connected To database");
    console.log("Starting the Server ...")

    
}).catch((err)=>{
    console.log("Cant connect to the database");
    console.log("Server is not Starting");
})

module.exports = connection;

