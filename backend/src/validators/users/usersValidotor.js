const { param, body, validationResult } = require('express-validator')

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

/**
 * edad 
 * nombre
 * país
 * rating 
 * email 
 */

const addValidator = [

    body('edad')
        .notEmpty().withMessage('Debes poner la edad')
        .isInt().withMessage('Debe ser entero'),

    body('role')
        .notEmpty().withMessage('Agrega el Role')
        .isIn(['admin', 'guest', 'customer'])
        .withMessage('Debe ser un rol correcto')
    ,


    body('nombre')
        .notEmpty().withMessage('Agrega el Nombre de usuario'),
    body('pais')
        .notEmpty().withMessage('Agrega Tu país'),
    body('rating')
        .optional(),
    body('url')
        .notEmpty().isURL({ protocols: ['HTTPS'] }),
    body('email').notEmpty().withMessage('Agrega Tu email').isEmail().withMessage('Formato Incorrecto'),

    (req, res, next) => {

        const errors = validationResult(req).mapped()

        if (Object.keys(errors).length) {
            res.status(400).send(errors)
        } else {
            next()
        }

    }
]


const UsersValidatorCollection = {
    updateValidator,
    addValidator
}


module.exports = {
    UsersValidatorCollection
}