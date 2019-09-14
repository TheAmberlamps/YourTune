var db = require("../models");

module.exports = function(app) {
  /*
  ****************************
  TRACKS
  ****************************
  */

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
  app.post("/api/track", (req, res) => {
    const track = {
      title: req.body.title,
      download: req.body.download,
      preview: req.body.preview,
      user: req.body.user
    };
    console.log(track);
    // validation
    for (key in track) {
      if (!track[key]) {
        res.status(500).send("ERROR make sure " + key + " is set in body");
        return;
      }
    }
    db.track.create(track).then(data => res.json(data));
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
};
