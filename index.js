express = require("express")
app = express()
path = require("path")
let port = 8080;

app.use(express.urlencoded({extented : true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req , res) => {
    res.render("index.ejs");
})

app.listen(port , (req , res) => {
    console.log("App is listening on port 8080");
})