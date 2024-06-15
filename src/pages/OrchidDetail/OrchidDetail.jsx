import React from "react";
import { useParams } from "react-router-dom";
import ListOfOrchids from "../../components/datas/ListOfOrchids";
function OrchidDetail() {
  const { Id } = useParams();
  const orchid = ListOfOrchids.find((orchid) => orchid.Id === parseInt(Id));
  if (!orchid) {
    return <h2>Orchid not found</h2>;
  }
  const imagePath = `src/assets/flower/${orchid.image}`;
  return (
    <div className="orchid-detail">
      <img src={imagePath} alt={orchid.name} />
      <h3>{orchid.name}</h3>
      <p>Origin: {orchid.origin}</p>
      <p>Color: {orchid.color}</p>
      <p>Category: {orchid.category}</p>
      <p>Rating: {orchid.rating}</p>
      <p>Special: {orchid.isSpecial ? "True" : "False"}</p>
    </div>
  );
}
export default OrchidDetail;
