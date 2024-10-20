import React, { useState, useEffect } from 'react';
import FetchComponent from './assets/fetch.jsx';
import OrderDetails from './assets/OrderDetails.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductDetails from './assets/ProductDetails.jsx';
import ProductList from './assets/ProductList.jsx';



function App() {
  const [products, setProducts] = useState([]); // To store fetched products
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/products'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); 
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}> 
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            
          </li>
        ))}
      </ul>
      <FetchComponent />
    </div>
  );
}

export default App;
