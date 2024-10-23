from socket import create_connection
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://' + os.environ.get('DB_USER') + ':' + os.environ.get('DB_PASSWORD') + '@' + os.environ.get('DB_HOST') + '/' + os.environ.get('DB_NAME')
db = SQLAlchemy(app)  # Initialize SQLAlchemy
print(app.config['SQLALCHEMY_DATABASE_URI'])

# Test connection to MySQL
def test_connection():
    try:
        db_host = os.environ.get('DB_HOST', 'localhost')
        db_port = int(os.environ.get('DB_PORT', 3306))
        connection = create_connection((db_host, db_port))
        print("Connection successful")
        connection.close()
    except Exception as e:
        print(f"Connection failed: {e}")

# Example model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    # ... other columns

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)