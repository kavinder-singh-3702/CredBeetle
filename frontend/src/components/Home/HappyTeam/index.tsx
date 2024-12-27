"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Steffan Cagle",
    role: "Engineer",
    image: "/1.png",
    quote:
      "What we usually consider as impossible are simply engineering problems… there’s no law of physics preventing them.",
  },
  {
    id: 2,
    name: "Marcos Dotella",
    role: "Director",
    image: "/2.png",
    quote:
      "You can never go wrong by investing in communities and the human beings within them.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Designer",
    image: "/5.png",
    quote: "Design is intelligence made visible.",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "Marketer",
    image: "/6.png",
    quote:
      "Marketing is no longer about the stuff you make, but about the stories you tell.",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Developer",
    image: "/7.png",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
  },
];

const Index = () => {
  const middleIndex = Math.floor(teamMembers.length / 2 + 1); // Get the middle index
  const [centerIndex, setCenterIndex] = useState(middleIndex);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: middleIndex, // Set initial slide to the middle one
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCenterIndex(newIndex);
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="text-white bg-black py-20">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold mb-10 text-center shadow-lg shadow-cyan-500/50">
          Our Happy Team
        </h1>
        <p className="text-lg text-center text-gray-300 font-medium mb-16">
          Meet our creative team, those who have passion to work and make our
          clients more comfortable and happy.
        </p>
      </div>
      <div className="px-10 relative">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col items-center text-center px-4 transition-all duration-700 ${
                index === centerIndex ? "scale-110" : "scale-90"
              }`}
              style={{
                transformOrigin: "center center",
                transition: "all 0.8s ease-in-out",
              }}
            >
              {/* Container for Image and Text */}
              <div
                className={`flex flex-col justify-center items-center ${
                  index === centerIndex
                    ? "h-[450px] w-[350px]"
                    : "h-[400px] w-[300px]"
                }`}
              >
                {/* Centered Image */}
                <div
                  className={`relative rounded-full overflow-hidden border-4 border-cyan-500 ${
                    index === centerIndex
                      ? "h-[250px] w-[250px]"
                      : "h-[200px] w-[200px]"
                  }`}
                >
                  <Image
                    src={member.image}
                    layout="fill"
                    objectFit="cover"
                    alt={member.name}
                  />
                </div>

                {/* Centered Text */}
                <div className="mt-6">
                  <h1
                    className={`text-lg font-bold text-cyan-500 ${
                      index === centerIndex ? "block" : "hidden"
                    }`}
                  >
                    {member.name}
                  </h1>
                  <h3
                    className={`text-md text-gray-400 mt-2 ${
                      index === centerIndex ? "block" : "hidden"
                    }`}
                  >
                    {member.role}
                  </h3>
                  <p
                    className={`text-sm text-gray-300 px-8 mt-3 ${
                      index === centerIndex ? "block" : "hidden"
                    }`}
                  >
                    &quot;{member.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <style jsx global>{`
          .slick-prev,
          .slick-next {
            z-index: 1;
            width: 50px;
            height: 50px;
          }

          .slick-prev:before,
          .slick-next:before {
            font-size: 30px;
            color: cyan;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Index;
