const router = require('express').Router()

const UserController = require('../controller/UserController')

router.post('/create', UserController.create)
router.get('/', UserController.readAllUser)
router.patch('/update/:_id', UserController.updateUser)
router.delete('/delete/:_id', UserController.deleteUser)


module.exports = router