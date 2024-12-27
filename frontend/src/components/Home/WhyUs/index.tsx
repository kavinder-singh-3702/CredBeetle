import React from "react";
import Card from "@/components/Cards/ChooseUsCard";

const Index = () => {
  const cards = [
    {
      imgSrc: "/discount.png",
      altText: "Coupons That Work",
      title: "Coupons That Actually Work!",
      description:
        "No more chasing ghosts or expired deals. If we show it, it works. If it doesn&apos;t, we&apos;ll eat an expired coupon ourselves (okay, maybe not, but you get the idea).",
    },
    {
      imgSrc: "/calendar.png",
      altText: "No Expiry Drama",
      title: "No Expiry Drama, Ever.",
      description:
        "Say goodbye to “Oops, this coupon expired yesterday” heartbreaks. Our coupons are eternal—well, almost. We handle it all so you never miss out on legit savings.",
    },
    {
      imgSrc: "/search.png",
      altText: "Discover Hidden Deals",
      title: "Discover Hidden Deals!",
      description:
        "We&apos;re like treasure hunters for discounts. You didn&apos;t even know you could save on that, did you? Now you do. You&apos;re welcome!",
    },
    {
      imgSrc: "/badge.png",
      altText: "Authentic Coupons",
      title: "100% Authentic. Zero Nonsense.",
      description:
        "No fake codes, no “Try again later,” and definitely no “works only on the 29th of February” jokes. Our coupons are as real as your love for saving money.",
    },
    {
      imgSrc: "/piggy.png",
      altText: "Saving Fun",
      title: "We Make Saving Fun!",
      description:
        "With us, finding a coupon feels less like work and more like an “Aha!” moment—minus the annoying fine print.",
    },
  ];

  return (
    <div className="bg-black text-white h-full p-10 mb-20">
      <h1 className="text-6xl font-extrabold text-center mb-6 text-cyan-400 shadow-lg shadow-cyan-500/50">
        Why Choose Us?
      </h1>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-20 text-center text-white">
          We&apos;re the Coupon Crusaders You Deserve!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
