'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.belongsTo(models.Projects)
    }
  };
  Employees.init({
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Hire_date: DataTypes.DATE,
    Salary: DataTypes.FLOAT,
    Job_Title: DataTypes.STRING,
    Project_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};