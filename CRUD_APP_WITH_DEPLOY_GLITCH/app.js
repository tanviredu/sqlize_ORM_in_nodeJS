const express    = require("express");
const Sequelize  = require("sequelize");
const nunjucks   = require("nunjucks");
const db         = require("./models/db");
const Todo     = require("./models/model");
const connection = require("./models/db");
const app        = express();
const PORT       = 8000;


app.use("/static",express.static("public"));
app.use(express.urlencoded({extended:true}));

nunjucks.configure('views',{
    autoescape : true,
    express    : app
});


app.get("/",async (req,res)=>{
    var tasks = await Todo.findAll();
    res.render("todo.html",{'tasks':tasks});
});


app.post("/", async (req,res)=>{
    content = req.body.content;
    try{
        var job = await Todo.create({
            content:content
        })
        console.log("Inserted Into database");
        console.log(job);
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
})

app.get("/edit/:uuid", async (req,res)=>{
    var uuid = req.params.uuid;
    var tasks = await Todo.findAll();
    res.render("todoedit.html",{'tasks':tasks,'uuid':uuid});
    
})


app.post("/edit/:uuid",async (req,res)=>{
    var uuid    = req.params.uuid;
    var updated_content = req.body.content;
    try{
        await Todo.update({content:updated_content},{
            where: {
                uuid:uuid
            }
        });
        res.redirect("/");
    }catch(err){
        console.log("error");
        res.redirect("/");
    }
})



app.get("/remove/:uuid",async (req,res)=>{
    var uuid = req.params.uuid;
    try{
        await Todo.destroy({
            where:{
                uuid:uuid
            }
        });
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
})




app.listen(PORT,()=>{
    console.log(`SERVER IS STARTING AT PORT ${PORT}`);
})