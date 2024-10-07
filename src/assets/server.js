import express from 'express';
import mysql from 'mysql';



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
app.use(express.json());
app.listen(5000, () => {
    console.log('Server running on port 5000');
});

app.post('/api/products', (req, res) => {
    const { name, description, price } = req.body;
  
    const query = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
    connection.query(query, [name, description, price], (err, result) => {
      if (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Failed to add product' }); 
      } else {
        res.status(201).json({ message: 'Product added successfully' }); 
      }
    });
  });