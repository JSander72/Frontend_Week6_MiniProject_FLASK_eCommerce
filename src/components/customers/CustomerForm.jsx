
import React, { useState } from 'react';
import axios from 'axios';

function CustomerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/customers', {
        name,
        email,
        phone
      });
      alert('Customer created successfully!');
    } catch (error) {
      console.error('Failed to create customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button type="submit">Create Customer</button>
    </form>
  );
}

export default CustomerForm;
