const express   = require("express");
const Sequelize = require("sequelize");
const nunjucks  = require("nunjucks");
const db        = require("./models/db");
const User      = require("./models/models");
const Auth      = require("./models/auth");
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


app.post("/",(req,res)=>{
    User.create({
        name : req.body.name,
        bio  : req.body.bio
    })
    .then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
        res.status(404).send(err);
    })
});



// this is the best



app.get("/login",(req,res)=>{
    res.render("login.html");
});

app.post("/login", async (req,res)=>{
    name      = req.body.username;
    password  = req.body.password;
    try{
        var auth = await Auth.create({
            name:name,
            password: password
        })
        console.log("done");
        res.json(auth);
        // you will see that the password is encrypted
        // res.redirect("/login")
    }catch(err){
        console.log(err);
        res.status(404).send(err)

    }
    
})









// authentiate function will open the connection
// with the sqlite database

app.listen(PORT,()=>{
    console.log(`SERVER STARTING AT PORT ${PORT}`);
})






