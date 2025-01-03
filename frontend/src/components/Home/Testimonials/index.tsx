"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/girl.png",
    testimonial:
      "This Marketing Agency is our solid partner since the day we launched our app. It's hard to describe the huge support and commitment they’ve put into our growth.",
  },
  {
    name: "Sophia Green",
    role: "Product Manager",
    image: "/girl2.png",
    testimonial:
      "Working with this team has been a seamless experience. They understand our needs and execute strategies flawlessly. Their support has been vital to our success!",
  },
  {
    name: "Michael Brown",
    role: "CTO",
    image: "/girl3.png",
    testimonial:
      "They've revolutionized the way we approach marketing. Their expertise is unmatched, and we're thrilled with the results they've delivered.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialSlider = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 animate-gradient">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-400 font-medium">
          Hear from the people who trust us to grow their business.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-screen-xl w-full bg-customBlue p-8 rounded-lg flex flex-col lg:flex-row gap-8">
        {/* Left Section - Text Content */}
        <div className="text-white lg:w-[40%]">
          <h1 className="text-4xl mb-8 font-bold">
            See what our customers are saying about us
          </h1>
          <p className="font-extrabold">
            We put our customers’ opinions first and do our best for their
            satisfaction. Go ahead to check some of them!
          </p>
        </div>

        {/* Right Section - Testimonial Slider */}
        <div className="lg:w-[60%]">
          <Slider {...sliderSettings} className="max-w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                {/* Testimonial Card */}
                <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex flex-col justify-between min-h-[400px] hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
                  {/* Profile Picture and Details */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 flex-grow">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;