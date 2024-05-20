const  express = require('express')
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")))

app.engine('ejs', ejsMate);

app.get("/",(req,res)=>{
    res.render("pages/home.ejs")
});

app.listen(8080,()=>{
    console.log("Server is Listning at port 8080");
})