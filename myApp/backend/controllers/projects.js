 const models = require('../models/index')
const Projects = models.Projects

exports.index = async (req, res, next) => {
  const projects = await Projects.findAll()

  res.status(200).json(projects)
}

exports.create = async (req, res, next) => {
  const {
    Project_name,
    Start_date,
    Planned_end_date,
    Description,
    Project_code
  } = req.body

  const project = await Projects.create({
    Project_name,
    Start_date,
    Planned_end_date,
    Description,
    Project_code
  })

  res.status(200).json(project)
}

exports.update = async (req, res, next) => {
  const projectId = req.params.projectId
  const project = await Projects.findByPk(projectId)

  const {
    Project_name,
    Start_date,
    Planned_end_date,
    Description,
    Project_code
  } = req.body

  const updatedProject = await project.update({
    Project_name,
    Start_date,
    Planned_end_date,
    Description,
    Project_code
  })

  res.status(200).json(updatedProject)
}

exports.delete = async (req, res, next) => {
  const {
    projectId: id,
  } = req.params

  const deletedProject = Projects.destroy({
    where: {
      id,
    }
  })

  res.status(204).json(deletedProject)
}