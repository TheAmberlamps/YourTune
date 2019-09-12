module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("track", {
    trackId: DataTypes.INTEGER,
    trackName: DataTypes.STRING,
    trackUrlFull: DataTypes.STRING,
    trackUrlPreview: DataTypes.STRING,
    uId: DataTypes.INTEGER
  });
  return Track;
};
