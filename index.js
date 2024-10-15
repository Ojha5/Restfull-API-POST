express = require("express")
app = express()
path = require("path")
let port = 8080;

app.use(express.urlencoded({extented : true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

let posts = [
    {
        username : "apnacollege",
        content : "This is our own Dev channel"
    },

    {
        username : "Om Kumar",
        content : "I am selected for my google summer internship"
    },

    {
        username : "Turkesh",
        content : "I am big fan of om . He is very humble!"
    }
]

app.get("/" , (req , res) => {
    res.send("We are in the root file")
})

app.get("/posts" , (req , res) => {
    res.render("index.ejs" , {posts});
})

app.get("/posts/new" , (req , res) => {
    res.render("new.ejs");
})

app.post("/posts" , (req , res) => {
    let {username , content} = req.body;
    posts.push({username , content});
    res.redirect("/posts"); // Yeh internally get method ke sath hi jayega /posts mai.
})

app.listen(port , (req , res) => {
    console.log("App is listening on port 8080");
})