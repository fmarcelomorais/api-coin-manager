const router = require('express').Router()

router.get('/', (req, res) =>{
    res.send('Pagina inicial')
})

module.exports = router