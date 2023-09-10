const { body } = require('express-validator')

// Validating request data
const customerValidation = [
    body('name', "Ім'я повинно містити більше трьох символів").isLength({ min: 3 }),
    body('email', 'Некоректний email').isEmail(),
    body('number', 'Некоректний номер телефону').isNumeric({ min: 3 })
]

// Export validation
module.exports = { customerValidation }