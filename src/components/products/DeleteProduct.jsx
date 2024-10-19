
import React from 'react';
import axios from 'axios';

function DeleteProduct({ productId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${productId}`);
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  return <button onClick={handleDelete}>Delete Product</button>;
}

export default DeleteProduct;
