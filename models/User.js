module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    card_num: DataTypes.INTEGER
  });
  return User;
};
