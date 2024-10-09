from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Database connection
def create_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='12wsxdr56',
            database='commerce'
        )
        if connection.is_connected():
            print('Connected to database')
        return connection
    except Error as e:
        print(f"Error connecting to database: {e}")
        return None

# Home route
@app.route('/')
def home():
    return "Welcome to the Flask E-commerce API!"

# Endpoint to insert product
@app.route('/api/products', methods=['POST'])
def add_product():
    connection = create_connection()
    if connection is None:
        return jsonify({'error': 'Database connection failed'}), 500

    try:
        cursor = connection.cursor()
        data = request.json
        name = data['name']
        description = data['description']
        price = data['price']
        
        query = "INSERT INTO products (name, description, price) VALUES (%s, %s, %s)"
        cursor.execute(query, (name, description, price))
        connection.commit()

        return jsonify({'message': 'Product added successfully', 'id': cursor.lastrowid}), 201
    except Error as e:
        print(f"Failed to add product: {e}")
        return jsonify({'error': 'Failed to add product'}), 500
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000, debug=True)
