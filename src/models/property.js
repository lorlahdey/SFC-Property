const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PropertySchema = new Schema({
    address: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    sittingRoom : {
        type: Number,
        required: true
    },
    kitchen: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    toilet: {
        type: Number,
        required: true
    },
    propertyOwner: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    valid_from: {
        type: String,
        required: true
    },
    valid_to: {
        type: String,
        required: true
    },
    image_url: {
        type: [],
        required: false
    }
}, { timestamps: true })

const Property = mongoose.model('Property', PropertySchema)

module.exports = Property