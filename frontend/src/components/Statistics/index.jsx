"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-5 text-center flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Best Solutions for your <span className="text-cyan-400">Shopping</span>
      </h2>
      <p className="text-xl text-gray-300 font-medium mb-16">
        Here are some numbers for you.
      </p>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
          <i className="fas fa-rocket text-cyan-400 text-6xl mb-4 animate-bounce"></i>
          <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {inView && <CountUp start={0} end={1210} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Website Projects</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
          <i className="fas fa-users text-cyan-400 text-6xl mb-4 animate-pulse"></i>
          <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {inView && <CountUp start={0} end={450} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">No. of Clients</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
          <i className="fas fa-clock text-cyan-400 text-6xl mb-4 animate-spin-slow"></i>
          <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {inView && <CountUp start={0} end={11420} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Working Hours</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
          <i className="fas fa-award text-cyan-400 text-6xl mb-4 animate-wiggle"></i>
          <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {inView && <CountUp start={0} end={25} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;