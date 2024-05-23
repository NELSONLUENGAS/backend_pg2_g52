const { UsersCollection } = require('../../database/models/usersModel')


const add_user_controller = async (req, res, next) => {

    try {
        const { title } = req.body

        const response = await UsersCollection.addUser()

        res.send(response)

    } catch (error) {
        next(error)
    }
}

const update_user_controller = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { presupuesto, destino } = req.body

        const response = await UsersCollection.updateTrip(id, destino, presupuesto)

        res.json(response)

    } catch (error) {
        next(error)
    }
}

const delete_user_controller = async (req, res, next) => {
    try {

        const { id } = req.params;

        const response = await UsersCollection.deleteTrip(id)

        res.json(response)

    } catch (error) {
        next(error)
    }
}


module.exports = {
    update_user_controller,
    delete_user_controller,
    add_user_controller
}