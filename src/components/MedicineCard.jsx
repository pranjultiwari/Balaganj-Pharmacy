import React from 'react';
import "../style/medicinecard.css";
const MedicineCard = ({ name, price, description, image }) => {
  const trimDescription = (description, length) => {
    return description.length > length ? description.substring(0, length) + '...' : description;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform duration-300 transform hover:scale-105 green-shadow green-shadow-hover">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price}</p>
        <p className="text-gray-700 text-base">{trimDescription(description, 100)}</p>
      </div>
    </div>
  );
};

export default MedicineCard;
