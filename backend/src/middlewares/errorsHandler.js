const handleErrors = (error, req, res, next) => {

    if (error) {
        console.log(error)
        res.status(error.status || 500).send(error)
    }

}


module.exports = { handleErrors }
