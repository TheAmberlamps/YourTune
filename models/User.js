module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    card: DataTypes.INTEGER
  });
  return User;
};
