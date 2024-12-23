import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen p-10 flex flex-col items-center gap-16">
      {/* Page Title */}
      <h1 className="text-6xl font-extrabold text-center mb-6 text-cyan-400 shadow-lg shadow-cyan-500/50">
        About Us
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/shieldd.svg"
            width={100}
            height={100}
            alt="Shield Icon"
            className="h-24 w-24 mb-6 bg-white rounded-full shadow-md"
          />
          <p className="text-lg leading-relaxed font-medium text-gray-300">
            At Credbeetle, we&apos;re all about working coupons—no expired
            codes, no fake deals, and absolutely no “Oops, this doesn&apos;t
            apply here” nonsense. Everything you see here is 100% legit because
            we&apos;re the watchdogs of savings who double-check, triple-check,
            and even quadruple-check every deal before it gets to you.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/hand.svg"
            width={100}
            height={100}
            alt="Hand Icon"
            className="h-24 w-24 mb-6 bg-white rounded-full shadow-md"
          />
          <p className="text-lg leading-relaxed font-medium text-gray-300">
            Didn&apos;t know you could save on that fancy coffee machine, your
            streaming bill, or even your pet&apos;s spa day? Now you do, thanks
            to us! We&apos;re treasure hunters for deals, turning your savings
            into pure fun. No wasted time, no useless codes—just straight-up
            legit coupons that work every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/dollar.svg"
            width={100}
            height={100}
            alt="Dollar Icon"
            className="h-24 w-24 mb-6 bg-white rounded-full shadow-md"
          />
          <p className="text-lg leading-relaxed font-medium text-gray-300">
            Think of us as your coupon sidekicks, saving the world one valid
            deal at a time because, hey, your savings deserve to work as hard as
            you do!
          </p>
        </div>
      </div>
    </div>
  );
}
