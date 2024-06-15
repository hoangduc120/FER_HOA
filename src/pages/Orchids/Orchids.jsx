
import React from "react";
import ListOfOrchids from "../../components/datas/ListOfOrchids";
import OrchidItem from "../OrchidItem/OrchidItem";

const Orchids = () => {
  return (
    <div className="orchids-container">
      {ListOfOrchids.map((orchid) => (
        <OrchidItem key={orchid.Id} orchid={orchid} />
      ))}
    </div>
  );
};

export default Orchids;
