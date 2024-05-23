const database = require('../dbConfig')


const addToDo = async (title) => {

    try {

        const consulta = "INSERT INTO todos (title) values ($1) RETURNING *"
        const values = [title]

        const result = await database.query(consulta, values)

        if (result.rowCount) {

            return {
                msg: 'ToDo agregado',
                data: result.rows[0]
            }

        } else {
            return {
                msg: 'ToDo no agregado',
                data: []
            }
        }

    } catch (error) {

        throw error
    }

}

const getToDos = async () => {

    try {

        const consulta = "SELECT * FROM todos"

        const { rows } = await database.query(consulta)

        if (rows.length) {

            return {
                msg: 'ToDos por hacer',
                data: rows
            }

        } else {

            return {
                msg: 'No hay ToDos',
                data: []
            }
        }

    } catch (error) {
        throw error
    }
}

const ToDosCollection = {
    addToDo,
    getToDos
}


module.exports = { ToDosCollection }