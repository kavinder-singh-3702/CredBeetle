import React from "react";

const index = () => {
  return (
    <div className="text-white h-full p-4 ">
      <h1 className="text-7xl font-black mb-10 text-center">Why Choose Us?</h1>
      <h1 className="text-4xl font-black mb-10 text-center">
        We're the Coupon Crusaders You Deserve!
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-20">
        <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-900 p-6">
          <img
            src="/discount.png"
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <h1 className="text-2xl font-semibold mb-5">
            Coupons That Actually Work!
          </h1>{" "}
          <p className="leading-relaxed font-bold  text-justify">
            No more chasing ghosts or expired deals. If we show it, it works. If
            it doesn't, we'll eat an expired coupon ourselves okay, maybe not,
            but you get the idea.
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-900 p-6">
          <img
            src="/calendar.png"
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <h1 className="text-2xl font-semibold mb-5">
            No Expiry Drama, Ever.
          </h1>

          <p className="leading-relaxed font-bold  text-justify">
            {" "}
            Say goodbye to “Oops, this coupon expired yesterday” heartbreaks.
            Our coupons are eternal well, almost. We handle it all so you never
            miss out on legit savings.
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-900 p-6">
          <img
            src="/search.png"
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <h1 className="text-2xl font-semibold mb-5">
            Discover Hidden Deals!
          </h1>
          <p className="leading-relaxed font-bold  text-justify">
            {" "}
            We're like treasure hunters for discounts. You didn't even know you
            could save on that, did you? Now you do. You're welcome!
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-900 p-6">
          <img
            src="/badge.png"
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <h1 className="text-2xl font-semibold mb-5">
            100% Authentic. Zero Nonsense.
          </h1>
          <p className="leading-relaxed font-bold  text-justify">
            {" "}
            No fake codes, no “Try again later”, and definitely no “works only
            on the 29th of February” jokes. Our coupons are as real as your love
            for saving money.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg rounded-lg bg-gray-900 p-6">
          <img
            src="/piggy.png"
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <h1 className="text-2xl font-semibold mb-5">We Make Saving Fun!</h1>{" "}
          <p className="leading-relaxed font-bold  text-justify">
            With us, finding a coupon feels less like work and more like an
            “Aha!” moment minus the annoying fine print.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
