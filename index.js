express = require("express")
app = express()
path = require("path")
let port = 8080;

app.use(express.urlencoded({extented : true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
const { v4 : uuidv4 } = require("uuid");
// uuidv4();

let posts = [
    {   
        id : uuidv4(),
        username : "apnacollege",
        content : "This is our own Dev channel"
    },

    {
        id : uuidv4(),
        username : "Om Kumar",
        content : "I am selected for my google summer internship"
    },

    {   
        id : uuidv4(),
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

app.get("/posts/:id" , (req , res) => {
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs" , {post});
})

app.post("/posts" , (req , res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id , username , content});
    res.redirect("/posts"); // Yeh internally get method ke sath hi jayega /posts mai.
})

app.listen(port , (req , res) => {
    console.log("App is listening on port 8080");
})