const mongoose = require('../db/connection')
const { Schema } = require('mongoose')
const { required } = require('nodemon/lib/config')

const Projects = mongoose.model('Projects',
    new Schema({
        name:{
            type: String,
            required: true
        },
        budget:{
            type: Number,
            required: true
        },
        category:{
           type: Object,
           required: true
        },
        cost:{
            type: Number,
            
        },
        services:{
            type: Array,            
        }
    })
)

module.exports = Projects