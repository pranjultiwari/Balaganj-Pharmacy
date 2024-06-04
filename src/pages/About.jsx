import React from "react";
import balaji from "../assets/balaji.jpeg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4">
      <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
        <h1 className="text-6xl font-bold mb-4 mt-8 md:mt-0 text-center text-green-500">
          Balaji Pharmacy
        </h1>
        <div className="relative bg-white border-4 border-green-500 p-6 rounded-lg shadow-lg cloud-shape">
          <h2 className="text-xl font-bold mb-2 text-center">
            About Our Medical Shop
          </h2>
          <p className="mb-2">
            Welcome to our medical shop, your one-stop destination for all your
            healthcare needs. We offer a wide range of herbal and pharmaceutical
            products to ensure your well-being.
          </p>
          <p className="mb-2">
            Our experienced pharmacists are here to provide you with
            personalized advice and support. We are committed to offering
            high-quality products at affordable prices.
          </p>
          <p className="mb-2">
            Visit us for a wide selection of over-the-counter medicines,
            vitamins, and supplements. Your health and satisfaction are our top
            priorities.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ">Contact Us</button>
          
        </div>
      </div>
      <div className="md:w-1/2 p-4 h-full flex justify-center items-center">
        <img
          src={balaji}
          alt="Medical Shop"
          className="w-full h-full object-cover rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
