
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateCustomerForm({ customerId }) {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const response = await axios.get(`/api/customers/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Failed to fetch customer details', error);
      }
    }

    fetchCustomer();
  }, [customerId]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/customers/${customerId}`, customer);
      alert('Customer updated successfully!');
    } catch (error) {
      console.error('Failed to update customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={customer.name} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={customer.email} onChange={handleChange} />

      <label>Phone:</label>
      <input type="text" name="phone" value={customer.phone} onChange={handleChange} />

      <button type="submit">Update Customer</button>
    </form>
  );
}

export default UpdateCustomerForm;
