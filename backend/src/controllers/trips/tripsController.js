const { TripsCollection } = require('../../database/models/tripsModel')


const update_trip_controller = async (req, res, next) => {
    try {

        const { id } = req.params;
        // const { presupuesto, destino } = req.query
        const { presupuesto, destino } = req.body

        const response = await TripsCollection.updateTrip(id, destino, presupuesto)

        res.json(response)

    } catch (error) {
        next(error)
    }
}

const delete_trip_controller = async (req, res, next) => {
    try {

        const { id } = req.params;

        const response = await TripsCollection.deleteTrip(id)

        res.json(response)

    } catch (error) {
        next(error)
    }
}


module.exports = {
    update_trip_controller,
    delete_trip_controller
}