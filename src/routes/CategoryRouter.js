const router = require('express').Router()

const CategoryCrontroller = require('../controller/CategoryController')

router.post('/create', CategoryCrontroller.create)
router.get('/', CategoryCrontroller.readAllCategories)
router.patch('/update/:_id', CategoryCrontroller.updateCategory)
router.delete('/delete/:_id', CategoryCrontroller.deleteCategory)

module.exports = router