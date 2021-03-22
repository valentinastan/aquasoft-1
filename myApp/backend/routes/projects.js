const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects.js');

router.get('/projects', projectsController.index)
router.post('/projects', projectsController.create)
router.put('/projects/:projectId', projectsController.update)
router.delete('/projects/:projectId', projectsController.delete)


module.exports = router