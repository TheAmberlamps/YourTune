module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("purchase", {
    id: DataTypes.INTEGER,
    uId: DataTypes.INTEGER,
    tId: DataTypes.INTEGER
  });
  return Purchase;
};
