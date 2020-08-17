var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// This will be used to setup timer for data collection
/*function intervalFunc() {
    console.log('Cant stop me now!');
  }
  
  setInterval(intervalFunc, 1500);
*/

// Basic Homepage
app.get("/", function(req, res){
    res.render("index");
});


// img retrieval
app.get("/img/:name", function(req, res){

    res.sendFile('/imgs/' + req.params.name, { root: __dirname});
})

// Catch all 
app.get("*", function(req, res){
    res.status(404);
    res.send("Page does not exist");
});

app.listen(3000, function(){
    console.log("Server has started");
}); 