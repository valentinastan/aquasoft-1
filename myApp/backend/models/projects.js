'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.hasMany(models.Employees)
    }
  };
  Projects.init({
    Project_name: DataTypes.STRING,
    Start_date: DataTypes.DATE,
    Planned_end_date: DataTypes.DATE,
    Description: DataTypes.STRING,
    Project_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};