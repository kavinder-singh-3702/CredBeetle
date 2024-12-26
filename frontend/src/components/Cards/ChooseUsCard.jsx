import React from "react";
import Image from "next/image";

const Card = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition-transform duration-300">
      <Image
        alt={altText}
        width={64}
        height={64}
        src={imgSrc}
        className="h-16 w-16 mb-4 bg-white rounded-full shadow-md"
      />
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
      <p className="text-md leading-relaxed text-gray-300 font-medium">
        {description}
      </p>
    </div>
  );
};

export default Card;
