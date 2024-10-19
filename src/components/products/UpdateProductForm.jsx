
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProductForm({ productId }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    }

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${productId}`, product);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Failed to update product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleChange} />

      <label>Description:</label>
      <input type="text" name="description" value={product.description} onChange={handleChange} />

      <label>Price:</label>
      <input type="number" name="price" value={product.price} onChange={handleChange} />

      <button type="submit">Update Product</button>
    </form>
  );
}

export default UpdateProductForm;
