// Import the required libraries
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Import config file
const { config } = require('./config') 

// Import validators
const { customerValidation } = require('./validators/customer') 

// Import Controllers
const CustomerController = require('./controllers/CustomerController')

// DB connection
mongoose
    .connect(config.DB)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log('DB error: ', error))

// Initial express
const app = express()

// Enable handling JSON data in requests
app.use(express.json())
// Enabling interaction with other domains
app.use(cors())

// Route for getting customers data
app.get('/api/users', CustomerController.getCustomers)

// Route for saving customer data
app.post('/api/user', customerValidation, CustomerController.saveCustomer)

// Starting the server
app.listen(config.port, (err) => {
    if (err) return console.log(err)

    console.log('Server connected')
})