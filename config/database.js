const { createPool } = require('mysql2');
require('dotenv').config();


const pool = createPool({
    host: process.env.Database_Host,
    user: process.env.Database_user,
    password : process.env.Database_password,  
    database : process.env.Database_name
});

module.exports = pool.promise();  
