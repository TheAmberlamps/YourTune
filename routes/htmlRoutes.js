var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.track.findAll({}).then(function(data) {
      console.log("Data:" + data);
      res.render("index", {
        tracks: data
      });
    });
  });

  // Search
  app.get("/search", (req, res) => {
    const query = req.query.q;
    db.track.findAll({}).then(data => {
      const out = [];
      for (let track of data) {
        if (track.title.toUpperCase().match(query.toUpperCase())) {
          out.push(track);
        }
      }
      res.render("index", {
        tracks: out
      });
    });
  });

  app.get("/profile", function(req, res) {
    db.track.findAll({}).then(function(data) {
      console.log("Track data: " + data);
      res.render("profile", {
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

  app.get("*", function(req, res) {
    res.render("404");
  });
};
