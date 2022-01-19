const Property = require('../models/property')

const PropertyController = () => {
    const createProperty = async (req, res) => {
        // Validate request
        if(!req.body) {
            return res.status(400).send({
                message: "Please fill all required field"
            })
        }

        const property = new Property({...req.body, image_url:req.file})
        console.log(property)
        try {
            await property.save()
            res.status(201).send(property)
        } catch (err) {
            res.status(500).send({
                message: err.message || "An error occured while creating new property"
            })
        }
    }

    const getOneProperty = async (req, res) => {
        // get a single property
        const id = req.params.id
        try {
            const property = await Property.findById(id)
            if (!property) {
                return res.status(404).send({
                    message: "Property not found with id " + id
                })
            }
            res.status(200).send(property)
        } catch (err) {
            res.status(500).send({
                message: err.message || "An error occured while creating new property"
            })
        }        
    }

    const getAllProperties = async (req, res) => {
        //retrieve all property from db
        try {
            const properties =  await Property.find({})
            res.status(200).send(properties)
        } catch (err) {
            res.status(500).send({
                message: err.message || "An error occured while creating new property"
            })
        }
    }

    const updateProperty = async (req, res) => {
        //validate request
        if (!req.body) {
            return res.status(400).send({
                message: 'Please fill all required field'
            })
        }

        //find property and update it with the request body
        const id = req.params.id
        try {
            const property = await Property.findByIdAndUpdate(id, req.body, {new :true})
            if (!property) {
                return res.status(404).send({
                    message: "Property not found with id " + id
                })
            }
            res.status(200).send(property)
        } catch (err) {
            if (err.Kind === 'ObjectId') {
                return res.status(404).send({
                    message: "property not found with id" + id
                })
            }
            return res.status(500).send({
                message: "Error updating property with id " + id
            })
        }   
    }
    

    return {
        createProperty,
        getOneProperty,
        getAllProperties,
        updateProperty
    }

}

module.exports = PropertyController()