
import React from 'react';
import axios from 'axios';

function DeleteCustomer({ customerId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/customers/${customerId}`);
      alert('Customer deleted successfully!');
    } catch (error) {
      console.error('Failed to delete customer', error);
    }
  };

  return <button onClick={handleDelete}>Delete Customer</button>;
}

export default DeleteCustomer;
