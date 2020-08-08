const express   = require("express");
const Sequelize = require("sequelize");
const nunjucks  = require("nunjucks");
const config    = require("./config");
const app       = express();
const PORT      = 8000;

app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}));

const connection = new Sequelize(config.dbname,config.user,config.password,{
    host     : config.host,
    dialect  : config.dialect,
    storage  : config.storage,
    opratorsAliases:config.aliases 
})


nunjucks.configure('views',{
    autoescape : true,
    express    : app 
});


// authentiate function will open the connection
// with the sqlite database

connection.authenticate().then(()=>{
    console.log("Connected To database");
    console.log("Starting the Server ...")

    app.listen(PORT,()=>{
        console.log(`SERVER STARTING AT PORT ${PORT}`);
    })
}).catch((err)=>{
    console.log("Cant connect to the database");
    console.log("Server is not Starting");
})






