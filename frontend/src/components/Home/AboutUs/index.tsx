import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="text-white h-screen items-center bg-black text-lg mx-auto p-4 flex flex-col gap-10 ">
      <h1 className="text-7xl font-black mb-10 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20   ">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/shieldd.svg"
            width="264"
            height="264"
            alt=""
            className="h-20 w-20 mb-6 bg-white rounded-full"
          />
          <p className="leading-relaxed font-bold max-w-xs text-justify">
            At Credbeetle, we`&apos;`re all about working coupons—no expired
            codes, no fake deals, and absolutely no `&quot;`Oops, this
            doesn`&apos;`t apply here`&quot;` nonsense. Everything you see here
            is 100% legit because we`&apos;`re the watchdogs of savings who
            double-check, triple-check, and even quadruple-check every deal
            before it gets to you.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            width={264}
            height={264}
            alt="logo"
            src="/hand.svg"
            className="h-20 w-20 mb-6 bg-white"
          />
          <p className="leading-relaxed font-bold max-w-xs text-justify">
            Didn`&apos;`t know you could save on that fancy coffee machine, your
            streaming bill, or even your pet`&apos;`s spa day? Now you do,
            thanks to us! We`&apos;`re treasure hunters for deals, turning your
            savings into pure fun. No wasted time, no useless codes—just
            straight-up legit coupons that work every time.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dollar.svg"
            width={264}
            height={264}
            alt="logo"
            className="h-20 w-20 mb-6 bg-white"
          />
          <p className="leading-relaxed font-bold max-w-xs text-justify">
            Think of us as your coupon sidekicks, saving the world one valid
            deal at a time because, hey, your savings deserve to work as hard as
            you do!
          </p>
        </div>
      </div>
    </div>
  );
}
