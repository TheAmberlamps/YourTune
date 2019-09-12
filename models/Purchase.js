module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("purchase", {
    id: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    track: DataTypes.INTEGER
  });
  return Purchase;
};
