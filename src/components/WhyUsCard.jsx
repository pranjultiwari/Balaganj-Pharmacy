import React from "react";
import "../style/whyus.css";
const WhyUsCard = ({ heading, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md relative group transform green-shadow">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};  

export default WhyUsCard;
