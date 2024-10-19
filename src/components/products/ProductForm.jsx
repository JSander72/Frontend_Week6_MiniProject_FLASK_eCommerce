
import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/products', {
        name,
        description,
        price,
      });
      alert('Product created successfully!');
    } catch (error) {
      console.error('Failed to create product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;
