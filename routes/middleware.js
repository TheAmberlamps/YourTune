const axios = require("axios").default;
const db = require("../models/");
module.exports = {
  verifyUser: function(req, res, next) {
    const token = req.query.t;
    if (!token) {
      res.sendStatus(401);
      return;
    }
    axios
      .get("https://dev-kh4e71db.auth0.com/userinfo", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        db.user
          .findOne({
            where: {
              email: response.data.email
            }
          })
          .then(user => {
            req.user = user;
            console.log(user);
            next();
          });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(401);
      });
  }
};
