module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("purchase", {
    user: DataTypes.INTEGER,
    track: DataTypes.INTEGER
  });
  return Purchase;
};
