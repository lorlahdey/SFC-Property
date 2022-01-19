const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//utils import
const config = require('./utils/config')
// require property routes
const PropertyRoutes =require('./routes/propertyRoutes')

// create express app
const app = express()

app.use(cors())

// parse request of content-type - application/X-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true}))

// parse request of content-type - application/json
app.use(express.json())

//configuring and connecting to the database
mongoose.Promise = global.Promise

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Successfully connected to the database');
    }).catch(err => [
        console.log('Could not connect to the database. Error...', err.message),
        process.exit()
    ])

//simple default route
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to SFC Lekki Property', 
        code: 200,
        status: 'success'
    })
})

// using as middleware
app.use('/api/property', PropertyRoutes)

//listen for requests on port
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})
