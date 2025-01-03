"use client";
import React from "react";
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
  return (
    <div className="text-white bg-black py-20">
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-6 text-center text-cyan-500">
          Our Happy Team
        </h1>
        <p className="text-lg text-center text-gray-300 font-light mb-16">
          Meet our creative team, passionate about delivering exceptional
          experiences and making our clients happy.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              {/* Image Container */}
              <div className="relative rounded-full overflow-hidden border-4 border-cyan-500 h-[150px] w-[150px] group-hover:border-cyan-300 transition-all duration-300">
                <Image
                  src={member.image}
                  layout="fill"
                  objectFit="cover"
                  alt={member.name}
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Text Container */}
              <div className="mt-6">
                <h1 className="text-xl font-semibold text-cyan-500 group-hover:text-cyan-300 transition-all duration-300">
                  {member.name}
                </h1>
                <h3 className="text-lg text-gray-400 mt-2 group-hover:text-gray-300 transition-all duration-300">
                  {member.role}
                </h3>
                <p className="text-base text-gray-300 mt-3 group-hover:text-gray-200 transition-all duration-300">
                  &quot;{member.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;