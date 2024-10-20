from flask import Flask, request, jsonify
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Database connection
def create_connection():
    connection = mysql.connector.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database=os.getenv('DB_NAME')
    )
    return connection

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
    except mysql.connector.Error as e:
        print(f"Failed to add product: {e}")
        return jsonify({'error': 'Failed to add product'}), 500
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

# Endpoint to get data from the database
@app.route('/api/data', methods=['GET'])
def get_data():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM yourTable')
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(results)

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000, debug=True)