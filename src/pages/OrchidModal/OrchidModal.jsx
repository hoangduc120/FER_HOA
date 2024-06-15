
import React from "react";

const OrchidModal = ({ orchid, onClose }) => {
  if (!orchid) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={orchid.image} alt={orchid.name} />
        <h3>{orchid.name}</h3>
        <p>Origin: {orchid.origin}</p>
        <p>Color: {orchid.color}</p>
        <p>Category: {orchid.category}</p>
        <p>Rating: {orchid.rating}</p>
        <p>Special: {orchid.isSpecial ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default OrchidModal;
