const express   = require("express");
const Sequelize = require("sequelize");
const nunjucks  = require("nunjucks");
const db        = require("./models/db");
const models    = require("./models/models");
const app       = express();
const PORT      = 8000;

app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}));



nunjucks.configure('views',{
    autoescape : true,
    express    : app 
});


// authentiate function will open the connection
// with the sqlite database

app.listen(PORT,()=>{
    console.log(`SERVER STARTING AT PORT ${PORT}`);
})






