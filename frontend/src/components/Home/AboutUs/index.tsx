import React from "react";

export default function page() {
  return (
    <div className="text-white h-screen w-[90vw] bg-black text-lg  mx-auto p-4 flex flex-col gap-10 ">
      <h1 className="text-7xl font-black mb-10 text-center">About Us</h1>
      <div className=" grid grid-cols-3  gap-20">
        <div className="flex flex-col items-center justify-center ">
          <p className="leading-relaxed font-bold ">
            <img
              src="/shieldd.svg"
              className="h-20 w-20 mb-10 bg-white rounded-full"
            />
            At Credbeetle, we're all about working coupons—no expired codes, no
            fake deals, and absolutely no "Oops, this doesn't apply here"
            nonsense. Everything you see here is 100% legit because we're the
            watchdogs of savings who double-check, triple-check, and even
            quadruple-check every deal before it gets to you.
          </p>
        </div>
        <p className="leading-relaxed font-bold  ">
          <img src="/hand.svg" className="h-20 w-20 mb-10 bg-white" />
          Didn't know you could save on that fancy coffee machine, your
          streaming bill, or even your pet's spa day? Now you do, thanks to us!
          We're treasure hunters for deals, turning your savings into pure fun.
          No wasted time, no useless codes—just straight-up legit coupons that
          work every time.
        </p>
        <p className="leading-relaxed font-bold ">
          <img src="/dollar.svg" className="h-20 w-20 mb-10 bg-white" />
          Think of us as your coupon sidekicks, saving the world one valid deal
          at a time because, hey, your savings deserve to work as hard as you
          do!
        </p>
      </div>
    </div>
  );
}
