
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerDetails({ customerId }) {
  const [customer, setCustomer] = useState(null);

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

  if (!customer) return <p>Loading...</p>;

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
}

export default CustomerDetails;
