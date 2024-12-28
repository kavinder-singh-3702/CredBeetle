import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  return (
    <div className="flex">
      <Slider>
        {profile.map((d, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg p-6 max-w-sm shadow-lg ml-10"
          >
            {/* Profile Picture */}
            <div className="flex items-center mb-4">
              <img
                src={d.image}
                alt="Benjamin Scott"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div className="ml-4">
                {/* Name and Role */}
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-gray-400">{d.role}</p>
              </div>
            </div>
            {/* Testimonial Content */}
            <p className="text-gray-300">{d.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const profile = [
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/girl.png",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Samantha Carter",
    role: "Lead Project Manager",
    image: "/9.png",
    testimonial: `Never been so delighted with marketing services before. They took the time to carefully research and figure out what our startup needed to get to the next level. Today we are one of the leaders of the market and keep growing thanks to your strategies.`,
  },
  {
    name: "Shashi Kumar Gupta",
    role: "Philosopher",
    image: "/download.jpg",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Stephen Hawkins",
    role: "Producer",
    image: "/four.png",
    testimonial: `This Marketing Agency has gone beyond our expectations ever since we use their services. We are so excited about the social media growth we experienced and will continue collaborating with this awesome team. Our company extremely recommends!`,
  },
  {
    name: "Christopher Nolan",
    role: "Producer",
    image: "/6.png",
    testimonial: `Never been so delighted with marketing services before. They took the time to carefully research and figure out what our startup needed to get to the next level. Today we are one of the leaders of the market and keep growing thanks to your strategies.`,
  },
  {
    name: "Lilie Lewis",
    role: "SEO Specialist",
    image: "/boy.png",
    testimonial: `This Marketing Agency has gone beyond our expectations ever since we use their services. We are so excited about the social media growth we experienced and will continue collaborating with this awesome team. Our company extremely recommends!`,
  },
];
export default index;
