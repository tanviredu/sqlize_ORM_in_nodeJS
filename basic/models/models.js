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
    // and we are adding some validators
    name :{
        type         : Sequelize.STRING,
        validators   :{
            len : [10],// 5 is the max value
            
        }
    }, 
    bio  :{ 
        type         : Sequelize.TEXT,
        // see the doc for the validators
    }
})

module.exports = User;
