import React, { useState, useEffect } from 'react';
import OrderDetails from './components/OrderDetails.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductDetails from './components/products/ProductsDetails.jsx';
import ProductList from './components/products/ProductList.jsx';
// import FetchComponent from './assets/fetchComponent.jsx';
import fetchProducts from './assets/fetchProducts.jsx'; 

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Route path="/products" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/order-details" component={OrderDetails} />
      </div>
    </Router>
  );
}

export default App;