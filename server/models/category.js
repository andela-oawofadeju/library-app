module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
       unique: {
        msg: 'Category title already exists'
      },
       allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.hasMany(models.Book, {
          foreignKey: 'categoryTitle',
          as:'Books'
        });
      },
    },
  });
  return Category;
};