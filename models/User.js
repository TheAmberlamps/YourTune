module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    cardNum: DataTypes.INTEGER
  });
  return User;
};
