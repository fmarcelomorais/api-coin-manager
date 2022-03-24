const router = require('express').Router()
const projectController = require('../controller/ProjectController')

router.get('/', projectController.readAllProjects)
router.post('/create', projectController.create)
router.patch('/edite/:_id', projectController.editeProject)
router.delete('/delete/:_id', projectController.deleteProject)
router.post('/project/:_id', projectController.getOneProject)


module.exports = router

