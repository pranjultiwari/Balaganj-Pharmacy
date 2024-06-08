import React from 'react';
import data from "../data/services.json";
import '../style/servicecards.css';
import { Link } from 'react-router-dom';
const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {data.map((service, index) => (
        <Link key={index} className="service-card" to={service.link}>
          <img src={service.img} alt={service.name} className="w-full h-48 object-cover"/>
          <div className="service-card-content">
            <h3 className="service-card-title">{service.name}</h3>
            <p className="service-card-description">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceCard;
