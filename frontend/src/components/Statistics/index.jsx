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
      className="bg-black text-white py-16 px-5 text-center flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold mb-6 text-center shadow-lg shadow-cyan-500/50">
        Best Solutions for your <span className="text-cyan-400">Shopping</span>
      </h2>
      <p className="text-lg text-gray-300 font-medium mb-16">
        Here are some numbers for you.
      </p>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <i className="fas fa-rocket text-cyan-400 text-6xl mb-4"></i>
          <h3 className="text-5xl font-bold mb-2">
            {inView && <CountUp start={0} end={1210} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Website Projects</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <i className="fas fa-users text-cyan-400 text-6xl mb-4"></i>
          <h3 className="text-5xl font-bold mb-2">
            {inView && <CountUp start={0} end={450} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">No. of Clients</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <i className="fas fa-clock text-cyan-400 text-6xl mb-4"></i>
          <h3 className="text-5xl font-bold mb-2">
            {inView && <CountUp start={0} end={11420} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Working Hours</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <i className="fas fa-award text-cyan-400 text-6xl mb-4"></i>
          <h3 className="text-5xl font-bold mb-2">
            {inView && <CountUp start={0} end={25} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
