module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("track", {
    track_id: DataTypes.INTEGER,
    track_name: DataTypes.STRING,
    track_url_full: DataTypes.STRING,
    track_url_preview: DataTypes.STRING,
    u_id: DataTypes.INTEGER
  });
  return Track;
};
