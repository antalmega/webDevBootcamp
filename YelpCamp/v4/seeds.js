var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Cloud's rest",
        image: "https://farm3.staticflickr.com/2844/9223184718_178a168729.jpg",
        description: "blah blah blah..."
    },
    {
        name: "Blue Lake",
        image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg",
        description: "blah blah blah..."
    },
    {
        name: "Far mountains",
        image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
        description: "blah blah blah..."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
        }
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!");
                    // add a coment
                    Comment.create(
                        {
                            text: "This place is great, But I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("new comment added!");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;