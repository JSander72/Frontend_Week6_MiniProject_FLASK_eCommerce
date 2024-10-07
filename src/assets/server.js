import express from 'express';
import mysql from 'mysql';
// import cors from 'cors';
// import bodyParser from 'body-parser';


// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12wsxdr56',
    database: 'commerce'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

const app = express();

app.listen(5000, () => {
    console.log('Server running on port 5000');
});