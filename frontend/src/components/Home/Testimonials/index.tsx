import React from "react";

const index = () => {
  return (
    <div className="flex">
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
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/9.png",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/download.jpg",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/four.png",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/6.png",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
  {
    name: "Benjamin Scott",
    role: "CEO & Founder",
    image: "/boy.png",
    testimonial: `This Marketing Agency is our solid partner since the day we launched our
    app. It's hard to describe the huge support and commitment they’ve put
    into our growth. This professional team helps us save money and time.
    Forever grateful, forever your clients. Thanks!`,
  },
];
export default index;
