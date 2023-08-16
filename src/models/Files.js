const { DataTypes } = require("sequelize");

//* Definiendo la función que crea el modelo Admins
module.exports = (sequelize) => {
  sequelize.define(
    "File",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uniqueFileName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      settedFileName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      doctorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    { timestamps: false }
  );
};
