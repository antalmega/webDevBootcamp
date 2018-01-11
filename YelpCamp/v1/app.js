var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3595/3460089715_d7cc898527.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8549/8707814671_2c1be6f623.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2587/3918023295_7e6e22c1e6.jpg"},
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3595/3460089715_d7cc898527.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8549/8707814671_2c1be6f623.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2587/3918023295_7e6e22c1e6.jpg"},
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3595/3460089715_d7cc898527.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8549/8707814671_2c1be6f623.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2587/3918023295_7e6e22c1e6.jpg"}
    ]
    

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});