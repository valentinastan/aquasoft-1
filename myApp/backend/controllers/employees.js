const models = require('../models/index')
const Employees = models.Employees

exports.index = async (req, res, next) => {
  console.log(req.params)
  const employees = await Employees.findAll({
    where: {
      Project_id: req.params.projectId,
    }
  });

  res.status(200).json(employees)
}

exports.create = async (req, res, next) => {
  const {
    Name,
    Email,
    Hire_date,
    Salary,
    Job_Title,
    Project_id
  } = req.body

  const employee = await Employees.create({
    Name,
    Email,
    Hire_date,
    Salary,
    Job_Title,
    Project_id
  })

  res.status(200).json(employee)
}

exports.update = async (req, res, next) => {
  const employeeId = req.params.employeeId
  const employee = await Employees.findByPk(employeeId)

  const {
    Name,
    Email,
    Hire_date,
    Salary,
    Job_Title,
    Project_id
  } = req.body

  const updatedEmployee = await employee.update({
    Name,
    Email,
    Hire_date,
    Salary,
    Job_Title,
    Project_id
  })

  res.status(200).json(updatedEmployee)
}

exports.delete = async (req, res, next) => {
  const {
    employeeId: id,
  } = req.params

  const deletedEmployee = Employees.destroy({
    where: {
      id,
    }
  })

  res.status(204).json(deletedEmployee)
}