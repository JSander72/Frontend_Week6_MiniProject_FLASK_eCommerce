const express = require('express');
// import express from 'express';
const app = express();
// import mysql from 'mysql2'; // Use mysql2 for promise support
// import dotenv from 'dotenv';

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

// dotenv.config(); 

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
// });


// app.use(express.json());

// app.post('/api/products', async (req, res, next) => {
//     try {
//         const { name, description, price } = req.body;

        
//         if (!name || !description || !price) {
//             return res.status(400).json({ error: 'Missing required fields' });
//         }

//         const query = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
//         await connection.promise().query(query, [name, description, price]); 
//         res.status(201).json({ message: 'Product added successfully' });
//     } catch (err) {
//         next(err); 
//     }
// });


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Internal server error' });
// });


