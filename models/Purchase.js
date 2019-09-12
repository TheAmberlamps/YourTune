module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("purchase", {
    id: DataTypes.INTEGER,
    u_id: DataTypes.INTEGER,
    t_id: DataTypes.INTEGER
  });
  return Purchase;
};
