const mongoose = require('mongoose')

// Creating new model Customer for database
const CustomerSchema = new mongoose.Schema({
    // Specify the type of fields
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    }
}, 
    // Enable date of creating document
    { timestamps: true }
)

// Export model
module.exports = mongoose.model('Customer', CustomerSchema)