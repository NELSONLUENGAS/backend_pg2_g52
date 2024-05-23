const express = require('express')
const routes = require('./routes/index');
const cors = require('cors')
const morgan = require('morgan');
const { handleErrors } = require('./middlewares/errorsHandler');

const app = express();

// middlewares
app.use(express.json());

app.use(morgan('dev'))

app.use(cors({
    origin: 'http://localhost:5173'
}))


// routes
app.use('/api', routes)


// Handle errors
app.use(handleErrors)

module.exports = app;


