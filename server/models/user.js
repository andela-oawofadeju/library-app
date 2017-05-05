module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    roleTitle: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Role,{
          foreignKey: 'roleTitle',
          as: 'Users'
        });
      },
    },
  });
  return User;
};