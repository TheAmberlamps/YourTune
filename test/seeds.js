const db = require("../models");

module.exports = function() {
  db.user.create({
    email: "chris.salza@gmail.com"
  });
  db.user.create({
    email: "unsted.paul@gmail.com"
  });
  db.user.create({
    email: "mannisingh182@gmail.com"
  });
  db.track.create({
    title: "Silk",
    download:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/422133312&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    preview:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/422133312&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    user: 1,
    price: 10.0
  });

  db.track.create({
    title: "Ghostlights",
    download:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/239910516&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    preview:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/239910516&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    user: 1,
    price: 10.0
  });

  db.track.create({
    title: "Streets of Beats",
    download:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55782201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    preview:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55782201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    user: 2,
    price: 12.0
  });
  db.track.create({
    title: "Origins and Heartstrings",
    download:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55128242&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    preview:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55128242&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    user: 2,
    price: 13.0
  });
};
