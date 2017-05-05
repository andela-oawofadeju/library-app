module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    quantity: {
      type: DataTypes.STRING
    },
    categoryTitle: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Book.belongsTo(models.Category, {
          foreignKey:'categoryTitle',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Book;
};