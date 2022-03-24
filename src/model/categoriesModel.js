const mongoose = require('../db/connection')
const { Schema } = require('mongoose')

const Categories = mongoose.model('Categories', 
    new Schema({
        name: {
            type: String,
            required: true
        }
    })
)

module.exports = Categories