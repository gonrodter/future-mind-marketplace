import React from "react";

const FAQCard = ({ image, text }) => {
    return (
      <div className="w-300px border-2 align-middle border-primary-lighter-blue bg-gray-100 py-10 rounded-md">
        <img className="m-auto items-center align-middle w-14" src={image} alt="rocket_icon" />
        <p className="text-center mt-6 text-primary-blue font-semibold text-lg">{text}</p>
      </div>
    );
}

export default FAQCard;