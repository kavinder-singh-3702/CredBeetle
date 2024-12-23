import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="bg-black text-white h-full p-10 mb-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-10 text-cyan-400 shadow-lg shadow-cyan-500/50">
          Why Choose Us?
        </h1>
        <h2 className="text-3xl font-bold mb-20 text-center text-white">
          We&apos;re the Coupon Crusaders You Deserve!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="Coupons That Work"
              width={80}
              height={80}
              src="/discount.png"
              className="h-20 w-20 mb-6 bg-white rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Coupons That Actually Work!
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              No more chasing ghosts or expired deals. If we show it, it works.
              If it doesn&apos;t, we&apos;ll eat an expired coupon ourselves
              (okay, maybe not, but you get the idea).
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="No Expiry Drama"
              width={80}
              height={80}
              src="/calendar.png"
              className="h-20 w-20 mb-6 bg-white rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              No Expiry Drama, Ever.
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              Say goodbye to “Oops, this coupon expired yesterday” heartbreaks.
              Our coupons are eternal—well, almost. We handle it all so you
              never miss out on legit savings.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="Discover Hidden Deals"
              width={80}
              height={80}
              src="/search.png"
              className="h-20 w-20 mb-6 bg-white rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Discover Hidden Deals!
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              We&apos;re like treasure hunters for discounts. You didn&apos;t
              even know you could save on that, did you? Now you do. You&apos;re
              welcome!
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="Authentic Coupons"
              width={80}
              height={80}
              src="/badge.png"
              className="h-20 w-20 mb-6 bg-white rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              100% Authentic. Zero Nonsense.
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              No fake codes, no “Try again later,” and definitely no “works only
              on the 29th of February” jokes. Our coupons are as real as your
              love for saving money.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="Saving Fun"
              width={80}
              height={80}
              src="/piggy.png"
              className="h-20 w-20 mb-6 bg-white rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              We Make Saving Fun!
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              With us, finding a coupon feels less like work and more like an
              “Aha!” moment—minus the annoying fine print.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
