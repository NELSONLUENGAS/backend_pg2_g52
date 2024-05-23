const { ToDosCollection } = require('../../database/models/todosModel')

const add_todo_controller = async (req, res, next) => {

    try {
        const { title } = req.body

        const response = await ToDosCollection.addToDo(title)

        res.send(response)

    } catch (error) {
        next(error)
    }
}


const get_todos_controller = async (req, res, next) => {

    try {
        const response = await ToDosCollection.getToDos()

        res.send(response)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    get_todos_controller,
    add_todo_controller
}