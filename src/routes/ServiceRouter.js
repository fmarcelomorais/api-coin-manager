const router = require('express').Router()

const ServiceController = require('../controller/ServiceController')

router.post('/create', ServiceController.create)
router.get('/', ServiceController.servicesAll)
router.patch('/update/:_id', ServiceController.updateService)
router.delete('/delete/:_id', ServiceController.deleteService)

module.exports = router