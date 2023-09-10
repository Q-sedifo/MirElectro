// Import Models
const CustomerModel = require('../models/customer')

// Import validators
const { validationResult } = require('express-validator')

// Getting customers data
const getCustomers = async (req, res) => {
    try {
        // Getting all documents of Customer model
        const customers = await CustomerModel.find()

        // Returning success response
        res.json({ 
            success: true,
            customers: customers 
        })
    } catch (error) {
        console.log(error)
        
        // Returning failed response if error
        res.status(500).json({ 
            success: false,
            message: 'Помилка серверу: не вдалось отримати дані'
        })
    }
}

exports.getCustomers = getCustomers

// Saving new customer
const saveCustomer = async (req, res) => {
    try {
        const errors = validationResult(req)

        // Returning failed response if incorrect data
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        // Creating a new document of Customer model
        const newCustomer = new CustomerModel(req.body)
        // Saving new document
        const customer = await newCustomer.save()

        // Returning success response with new customer
        res.json({
            success: true,
            message: 'Дані успішно збережені',
            customer
        })
    } catch (error) {
        console.log(error)

        // Returning failed response if error
        res.status(500).json({
            success: false,
            message: 'Помилка серверу: не вдалось зберегти дані'
        })
    }
}

exports.saveCustomer = saveCustomer

