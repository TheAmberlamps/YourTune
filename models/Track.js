module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("track", {
    title: DataTypes.STRING,
    download: DataTypes.STRING,
    preview: DataTypes.STRING,
    user: DataTypes.INTEGER
  });
  return Track;
};
