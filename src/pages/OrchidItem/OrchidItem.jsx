
import React from "react";
import { Link } from "react-router-dom";

const OrchidItem = ({ orchid }) => {
  return (
    <div className="orchid-item">
      <img src={orchid.image} alt={orchid.name} />
      <h3>{orchid.name}</h3>
      <p>Origin: {orchid.origin}</p>
      <p>Color: {orchid.color}</p>
      <p>Category: {orchid.category}</p>
      <p>Rating: {orchid.rating}</p>
      <p>Special: {orchid.isSpecial ? "True" : "False"}</p>
      <Link to={`/orchid/${orchid.Id}`}>Detail</Link>
    </div>
  );
};

export default OrchidItem;
