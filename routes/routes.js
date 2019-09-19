var db = require("../models");
const middleware = require("./middleware");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.track.findAll({}).then(function(data) {
      res.render("index", {
        tracks: data
      });
    });
  });

  app.get("/profile", middleware.verifyUser, (req, res) => {
    const token = req.query.t;
    db.track
      .findAll({
        where: {
          user: req.user.id
        }
      })
      .then(data => {
        res.render("profile", { tracks: data, token: token });
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

  app.get("/cart", middleware.verifyUser, function(req, res) {
    db.cart
      .findAll({
        where: {
          user: req.user.id
        }
      })
      .then(items => {
        const promises = [];
        for (let track of items) {
          const promise = db.track.findOne({
            where: {
              id: track.track
            }
          });
          promises.push(promise);
        }
        Promise.all(promises).then(tracks => {
          // calculate total
          let total = 0;
          for (let t of tracks) {
            total += parseFloat(t.price);
          }
          res.render("shoppingcart", { tracks: tracks, total: total });
        });
      });
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/profile", middleware.verifyUser, (req, res) => {
    res.send(req.user);
  });

  /*
  ****************************
  API
  ****************************
  */

  app.get("/api/cart", middleware.verifyUser, function(req, res) {
    console.log("get /api/cart");
    db.cart
      .findAll({
        where: {
          user: req.user.id
        }
      })
      .then(data => {
        res.json(data);
      });
  });

  app.post("/api/cart", middleware.verifyUser, (req, res) => {
    console.log("post /api/cart");
    const cart = {
      user: req.user.id,
      track: req.body.track
    };
    db.cart.create(cart).then(data => {
      res.json(data);
    });
  });

  // Create a user
  app.post("/api/user", (req, res) => {
    db.user
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(response => {
        if (!response) {
          db.user.create(req.body).then(data => {
            res.json(data);
          });
        } else {
          res.status(500).send(response);
        }
      })
      .catch(err => {
        throw err;
      });
  });

  // get all tracks
  app.get("/api/tracks", (req, res) => {
    db.track.findAll({}).then(data => res.json(data));
  });

  // get all tracks assosciated with a user
  app.get("/api/user/tracks/:id", function(req, res) {
    db.track
      .findOne({
        where: {
          uId: req.params.id
        }
      })
      .then(data => {
        res.json(data);
      });
  });

  // Create a track
  app.post("/api/tracks", middleware.verifyUser, (req, res) => {
    const track = {
      title: req.body.title,
      download: req.body.download,
      preview: req.body.preview,
      user: req.user.id,
      price: req.body.price
    };
    // validation
    for (key in track) {
      if (!track[key]) {
        res.status(500).send("ERROR make sure " + key + " is set in body");
        return;
      }
    }
    db.track.create(track).then(data => res.redirect("/"));
  });

  // update track
  app.put("/api/track/:id", (req, res) => {
    const track = {
      title: req.body.title,
      download: req.body.download,
      preview: req.body.preview,
      user: req.body.user
    };

    db.track.update(track, { where: { id: req.params.id } }).tnen(data => res.json(data));
  });

  // delete track
  app.delete("/api/track/:id", (req, res) => {
    db.track
      .destroy({
        where: { id: req.params.id }
      })
      .then(data => res.json(data));
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
