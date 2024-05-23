const { param, validationResult } = require('express-validator')

const updateValidator = [
    param('id').notEmpty().withMessage('Debes pasar un ID').isInt().withMessage('Debe ser un entero'),
    (req, res, next) => {

        const errors = validationResult(req).mapped()
        console.log(Object.keys(errors))
        if (Object.keys(errors).length) {
            res.send(errors)
        } else {
            next()
        }

    }
]


const TripsValidatorCollection = {
    updateValidator
}


module.exports = {
    TripsValidatorCollection
}