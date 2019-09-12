module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("track", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    preview: DataTypes.STRING,
    download: DataTypes.STRING,
    user: DataTypes.INTEGER
  });
  return Track;
};
