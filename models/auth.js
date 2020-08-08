const Sequelize  = require("sequelize");
const connection = require("./db");
const bcrypt     = require("bcrypt");

const Auth = connection.define("Auth",{
 
    // hooks are what hapend after you get the data
    // like envrypt the data
    username   : {
        type      : Sequelize.STRING,
        
    },
    password: {
        type      : Sequelize.STRING
    }  
},{
    hooks      : {
        afterValidate:(user)=>{
            user.password = bcrypt.hashSync(user.password,8);
        }
    }
})

module.exports = Auth;
