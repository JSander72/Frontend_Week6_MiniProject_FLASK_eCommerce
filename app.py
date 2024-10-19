from flask import Flask, jsonify
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Database connection
def get_db_connection():
    connection = mysql.connector.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database=os.getenv('DB_NAME')
    )
    return connection

@app.route('/')
def index():
    return 'Welcome to the API'

@app.route('/api/data', methods=['GET'])
def get_data():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM yourTable')
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)