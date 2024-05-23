require('dotenv').config();
const { Pool } = require('pg');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const database = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    allowExitOnIdle: true
})


module.exports = database;