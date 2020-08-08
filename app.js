const express   = require("express");
const Sequelize = require("sequelize");
const nunjucks  = require("nunjucks");
const db        = require("./models/db");
const User    = require("./models/models");
const app       = express();
const PORT      = 8000;

app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}));



nunjucks.configure('views',{
    autoescape : true,
    express    : app 
});



app.get("/",(req,res)=>{
    res.render("index.html");
})
app.post("/", async (req,res)=>{
    name = req.body.name;
    bio  = req.body.bio;
    try{
        await User.create({
            name:name,
            bio: bio
        })
        console.log("done");
        res.redirect("/")
    }catch(err){
        console.log(err);
        res.redirect("/")

    }
    
})



// authentiate function will open the connection
// with the sqlite database

app.listen(PORT,()=>{
    console.log(`SERVER STARTING AT PORT ${PORT}`);
})






