const database = require('../dbConfig');


const addUser = async (title) => {

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

const updateUser = async (id, destino, presupuesto) => {

    try {

        const consulta = "UPDATE viajes SET destino = $1, presupuesto = $2 WHERE id = $3 RETURNING *";
        const values = [destino, presupuesto, id]

        const result = await database.query(consulta, values)


        if (result.rowCount) {

            return {
                msg: 'Modificado',
                data: result.rows[0]
            }
        } else {
            return {
                msg: 'No modificado',
                data: []
            }
        }



    } catch (error) {
        const err = new Error('Error en la consulta');

        err.msg = 'Bad Request'
        err.status = '400'
        err.origin = 'Database'
        err.model = 'trips'
        err.details = error.message

        throw err;
    }
}

const deleteUser = async (id) => {

    try {

        const consulta = "DELETE FROM viajes WHERE id = $1 RETURNING *";
        const values = [id]

        const result = await database.query(consulta, values)


        if (result.rowCount) {

            return {
                msg: 'Eliminado',
                data: result.rows[0]
            }
        } else {
            return {
                msg: 'No Eliminado',
                data: []
            }
        }



    } catch (error) {
        const err = new Error('Error en la consulta');

        err.msg = 'Bad Request'
        err.status = '400'
        err.origin = 'Database'
        err.model = 'trips'
        err.details = error.message

        throw err;
    }
}


const UsersCollection = {
    updateUser,
    deleteUser,
    addUser
}



module.exports = {
    UsersCollection
}