from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import User, Product

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db' 
db = SQLAlchemy(app)

@app.route('/')
def index():
    return "Welcome to the E-commerce API"

@app.route('/users')
def get_users():
    users = User.query.all()
    return {'users': [user.username for user in users]}

@app.route('/products')
def get_products():
    products = Product.query.all()
    return {'products': [product.name for product in products]}

if __name__ == '__main__':
    app.run(debug=True)