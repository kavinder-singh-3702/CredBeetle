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
      "This Marketing Agency is our solid partner since the day we launched our app. It's hard to describe the huge support and commitment they’ve put into our growth. This professional team helps us save money and time. Forever grateful, forever your clients. Thanks!",
  },
  {
    name: "Sophia Green",
    role: "Product Manager",
    image: "/girl.png",
    testimonial:
      "Working with this team has been a seamless experience. They understand our needs and execute strategies flawlessly. Their support has been vital to our success!",
  },
  {
    name: "Michael Brown",
    role: "CTO",
    image: "/girl.png",
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
  autoplaySpeed: 3000,
  arrows: true,
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
      <h2 className="text-4xl font-extrabold text-center text-cyan-400 shadow-lg shadow-cyan-500/50 mb-20">
        What Our Clients Say
      </h2>

      <div className="w-full  max-w-screen-xl mx-auto flex ">
        <div className="text-white mr-20">
          <h1 className="text-4xl mb-8 mt-20  ">
            See what our customers are saying about us
          </h1>
          <p>
            We put our customers’ opinions first and do our best for their
            satisfaction. Go ahead to check some of them!
          </p>
        </div>
        <div className="overflow-hidden">
          <Slider {...sliderSettings} className="max-w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4  ">
                <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg ">
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
                  <p className="text-gray-300">{testimonial.testimonial}</p>
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
