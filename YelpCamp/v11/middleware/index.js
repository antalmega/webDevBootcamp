var Campground = require("../models/campground");
var Comment    = require("../models/comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    // is user logged in
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err || !foundCampground){
               console.log(err);
               res.flash("error", "Campground not found");
               res.redirect("back");
           } else if(foundCampground.author.id.equals(req.user._id)){
                req.campground = foundCampground;
                next();
           } else {
               // otherwise, redirect
               res.flash("error", "You don't have permission to do that");
               res.redirect("back");
           }
        });

    } else {
        // if not, redirect
        req.flash("error", "You need to be logged to do that");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    // is user logged in
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err || !foundComment){
               console.log(err);
               req.flash("error", "Comment not found");
               res.redirect("back");
           } else if(foundComment.author.id.equals(req.user._id)){
               next();
           } else {
               // otherwise, redirect
               res.flash("error", "You don't have permission to do that");
               res.redirect("back");
           }
        });

    } else {
        // if not, redirect
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;