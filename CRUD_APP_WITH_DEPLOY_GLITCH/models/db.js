const Sequelize   = require("sequelize");
const config      = require("./config");

const connection = new Sequelize(config.dbname,config.user,config.password,{
    host    : config.host,
    dialect : config.dialect,
    storage : config.storage,
    opratorsAliases: config.aliases,

    define:{
        freezeTableName : true
    }
})

connection.sync().then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err)
})


module.exports = connection;