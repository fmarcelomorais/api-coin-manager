const mongoose = require('../db/connection')
const { Schema } = require('mongoose')

const Service = mongoose.model('Service',
    new Schema({
        name:{
            type: String,
            required: true
        },
        cost:{
            type: Number,
            required: true
        },
        description:{
            type: String
        }
    })
)

module.exports = Service