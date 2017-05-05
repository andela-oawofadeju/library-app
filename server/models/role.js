module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define('Role', {
    title: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Role title already exists'
      },
      isEmpty: {
        msg: 'This field cannot be empty'
      },
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Roles.hasMany(models.User,{
          foreignKey: 'roleTitle',
          ondelete: 'CASCADE'
        });
      },
    },
  });
  return Role;
};