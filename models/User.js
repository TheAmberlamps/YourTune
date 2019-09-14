module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    card: DataTypes.INTEGER
  });
  return User;
};
