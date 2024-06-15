// src/OrchidModal.jsx
import React from 'react';
import './OrchidModal.css';

const OrchidModal = ({ orchid, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{orchid.name}</h2>
        <img src={orchid.image} alt={orchid.name} className="modal-image" />
        <p>Origin: {orchid.origin}</p>
        <p>Color: {orchid.color}</p>
        <p>Category: {orchid.category}</p>
        <p>Rating: {orchid.rating} / 5</p>
        {orchid.isSpecial && <p className="special">Special Orchid</p>}
      </div>
    </div>
  );
};

export default OrchidModal;
