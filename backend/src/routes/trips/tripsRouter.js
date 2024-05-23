const router = require('express').Router()

const { update_trip_controller, delete_trip_controller } = require('../../controllers/trips/tripsController')
const { TripsValidatorCollection } = require('../../validators/trips/tripsValidotor')


router.put('/update/:id', TripsValidatorCollection.updateValidator, update_trip_controller)
router.delete('/delete/:id', delete_trip_controller)


module.exports = router