"use client";
import React from "react";
import Image from "next/image";

const Sponsors = () => {
  const row1 = [
    "/assets/sponsors/cc1.png",
    "/assets/sponsors/cc2.png",
    "/assets/sponsors/cc3.png",
    "/assets/sponsors/cc4.jpg",
    "/assets/sponsors/cc5.jpg",
    "/assets/sponsors/cc6.jpg",
  ];

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center py-16 bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Enhanced Blogs Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Blogs
          </h1>
          <p className="text-xl font-medium text-center max-w-4xl mb-10 text-gray-300">
            Explore our latest insights, stories, and updates on sustainable
            practices, customer value, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Blog Card 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">Blog Title 1</h2>
              <p className="text-gray-300 mb-4">Short description of the blog post.</p>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-300">
                Read More
              </button>
            </div>
            {/* Blog Card 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">Blog Title 2</h2>
              <p className="text-gray-300 mb-4">Short description of the blog post.</p>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-300">
                Read More
              </button>
            </div>
            {/* Blog Card 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">Blog Title 3</h2>
              <p className="text-gray-300 mb-4">Short description of the blog post.</p>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Partners and References Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Partners and References
          </h1>
          <p className="text-xl font-medium text-center max-w-4xl mb-10 text-gray-300">
            We work with a network of brands dedicated to providing value to
            customers while supporting local economies and sustainable practices.
          </p>

          {/* Infinite Scroll Container */}
          <div className="flex overflow-hidden w-full max-w-[1200px] mask-image">
                        {/* First Row */}
                        <div className="flex animate-scrollX">
              {row1.map((el, index) => (
                <div
                  key={index}
                  className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-1 transform transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    height={264}
                    width={264}
                    src={el}
                    alt=""
                    className="object-contain w-full h-full rounded-md aspect-[16/9] shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/50"
                  />
                </div>
              ))}
            </div>
            {/* Second Row (Duplicate for Infinite Scroll Effect) */}
            <div className="flex animate-scrollX">
              {row1.map((el, index) => (
                <div
                  key={index}
                  className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-1 transform transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    height={264}
                    width={264}
                    src={el}
                    alt=""
                    className="object-contain w-full h-full rounded-md aspect-[16/9] shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;