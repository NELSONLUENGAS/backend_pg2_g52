const router = require('express').Router()
const TodosRouter = require('./todos/todosRouter')
const TripsRouter = require('./trips/tripsRouter')
const UsersRouter = require('./users/usersRouter')

router.use('/todos', TodosRouter)
router.use('/trips', TripsRouter)
router.use('/users', UsersRouter)

module.exports = router
