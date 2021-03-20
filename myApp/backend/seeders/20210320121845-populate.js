'use strict';
const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentences(),
      Project_code: "1294"
    },
    {
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentences(),
      Project_code: "1297"
    },
    { 
      Project_name: faker.lorem.words(),
      Start_date: faker.date.past(),
      Planned_end_date: faker.date.future(),
      Description: faker.lorem.sentences(),
      Project_code: "1299"}
  ], {}).then(() => {
    return Post.findAll().then((projects) => {
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
