module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("cart", {
    user: DataTypes.INTEGER,
    track: DataTypes.INTEGER
  });
  return Cart;
};
