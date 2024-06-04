import React from "react";
import ServiceCard from "../components/ServiceCard";
import data from "../data/services.json";
import whyUsData from "../data/whyus.json";
import WhyUsCard from "../components/WhyUsCard";

const Services = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <ServiceCard data={data} />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className={`md:col-span-1 ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              }`}
            >
              <WhyUsCard
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
