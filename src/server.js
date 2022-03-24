const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())

const rootRouter = require('./routes/rootRouter')
const userRouter = require('./routes/UserRouter')
const categoriesRouter = require('./routes/CategoryRouter')
const projectsRouter = require('./routes/ProjectRouter')
const serviceRouter = require('./routes/ServiceRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', rootRouter)
app.use('/users', userRouter)
app.use('/categories', categoriesRouter)
app.use('/projects', projectsRouter)
app.use('/services', serviceRouter)


module.exports = app