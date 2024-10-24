from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import User, Product

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db' 
db = SQLAlchemy(app)

# issue with mysql using sqlite for now
# moved models to models.py
# able to launch http:127.0.0.1:5000 
# but showing a 404 error "Not Found"


@app.route('/users')
def get_users():
    users = User.query.all()
    return {'users': [user.username for user in users]}

@app.route('/products')
def get_products():
    products = Product.query.all()
    return {'products': [product.name for product in products]}

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)