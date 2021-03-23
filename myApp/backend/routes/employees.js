const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employees.js');

router.get('/employees/:projectId', employeesController.index)
router.post('/employees/:projectId', employeesController.create)
router.put('/employees/:projectId/:employeeId', employeesController.update)
router.delete('/employees/:employeeId', employeesController.delete)


module.exports = router