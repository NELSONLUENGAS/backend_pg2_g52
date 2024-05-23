const router = require('express').Router()

const { get_todos_controller, add_todo_controller } = require('../../controllers/todos/todosController')


router.get('/get-all', get_todos_controller)

router.post('/add', add_todo_controller)


module.exports = router