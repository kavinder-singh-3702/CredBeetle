import React from "react";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white h-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Why Credbeetle?
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-xl leading-8 text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Saving money shouldn’t feel like rocket science or a gamble. At
          Credbeetle, we keep it simple: No fake codes. No expired deals. No
          nonsense. Your time and savings matter to us, so we ensure every
          coupon works like magic every single time. Because you deserve savings
          without the drama!
        </p>

        {/* What We Bring to the Table */}
        <section className="mt-16 bg-gray-800/50 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
            What We Bring to the Table
          </h2>
          <p className="text-xl leading-8 text-gray-300 mb-8 text-center">
            We’re not just a coupon site; we’re your ultimate savings wingman:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                Handpicked, Verified Coupons
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                Every deal is vetted to be 100% legit. If it’s here, it works. Period.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                Discover Hidden Savings
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                Don’t settle for obvious discounts. We dig deep to bring you deals you didn’t even know existed.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                All Types of Coupons
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                From everyday essentials to rare gems, we’ve got you covered.
              </p>
            </li>
          </ul>
        </section>

        {/* Why We’re Your Perfect Fit */}
        <section className="mt-16 bg-gray-800/50 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
            Why We’re Your Perfect Fit
          </h2>
          <p className="text-xl leading-8 text-gray-300 mb-8 text-center">
            Other coupon sites are like your flaky friends—sometimes they show
            up, sometimes they don’t. Here’s why we’re different:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                We’re Reliable
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                If we say it works, it works. No exceptions.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
            <strong className="text-cyan-400 text-2xl block mb-4">
                We’re Transparent
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                No annoying fine print or misleading offers here.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                We’re Fun
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                Saving money should feel good, and we make sure it does.
              </p>
            </li>
          </ul>
        </section>

        {/* Our Promise to You */}
        <section className="mt-16 bg-gray-800/50 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
            Our Promise to You
          </h2>
          <p className="text-xl leading-8 text-gray-300 mb-8 text-center">
            At Credbeetle, we don’t just give you coupons; we give you confidence:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                Confidence in Legitimacy
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                Every coupon is verified to ensure it’s 100% legit.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                Never Miss Out
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                We ensure you’ll always find the best deals available.
              </p>
            </li>
            <li className="bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow">
              <strong className="text-cyan-400 text-2xl block mb-4">
                Keep Coming Back
              </strong>
              <p className="text-lg leading-7 text-gray-300">
                Our platform is designed to make saving money addictive.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Index;