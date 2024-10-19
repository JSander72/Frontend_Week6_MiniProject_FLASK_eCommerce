
import React from 'react';

function ProductConfirmationModal({ action, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <p>Are you sure you want to {action} this product?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default ProductConfirmationModal;
