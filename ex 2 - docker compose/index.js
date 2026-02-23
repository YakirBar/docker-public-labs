const mysql = require('mysql2/promise');
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3010

app.get('/', (req, res) => {
  res.send('<h1>Lab 5 - Homework Docker Compose</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const connectionConfig = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

async function main() {
    let connection;

    try {
        // Create a connection
        connection = await mysql.createConnection(connectionConfig);
        console.log('Connected to MySQL Database!');
    } catch (err) {
        console.error('Database error:', err);
    }
}

main();