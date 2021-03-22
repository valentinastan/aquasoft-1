'use strict';
const faker = require('faker');
const models = require('../models/index')
const Projects = models.Projects

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentence(),
      Project_code: "1294"
    },
    {
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentence(),
      Project_code: "1297"
    },
    { 
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentence(),
      Project_code: "1299"}
  ], {}).then(() => {
    return Projects.findAll().then((projects) => {
      console.log('projects', projects)
      return queryInterface.bulkInsert('Employees', [{
      Name: faker.name.firstName(),
      Email: faker.internet.email(),
      Hire_date: faker.date.past(),
      Salary: 2839,
      Job_Title: faker.name.jobTitle(),
      Project_id: projects[0].id
    },
    {
      Name: faker.name.firstName(),
      Email: faker.internet.email(),
      Hire_date: faker.date.past(),
      Salary: 3800,
      Job_Title: faker.name.jobTitle(),
      Project_id: projects[1].id
    },
  ], {})})
});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
