var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.track.findAll({}).then(function(data) {
      res.render("index", {
        tracks: data
      });
    });
  });

  app.get("/topsong", function(req, res) {
    res.render("topsong");
  });

  app.get("/favorites", function(req, res) {
    res.render("favorites");
  });

  app.get("/buysong", function(req, res) {
    res.render("buysong");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });
};
