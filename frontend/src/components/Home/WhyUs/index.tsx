import React from "react";
import Card from "@/components/Cards/ChooseUsCard";

const Index = () => {
  const cards = [
    {
      imgSrc: "/discount.png",
      altText: "Coupons That Work",
      title: "Coupons That Actually Work!",
      description:
        "No more chasing ghosts or expired deals. If we show it, it works. If it doesn’t, we’ll eat an expired coupon ourselves (okay, maybe not, but you get the idea).",
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
        "We’re like treasure hunters for discounts. You didn’t even know you could save on that, did you? Now you do. You’re welcome!",
    },
    {
      imgSrc: "/badge.png",
      altText: "Authentic Coupons",
      title: "100% Authentic. Zero Nonsense.",
      description:
        "No fake codes, no “Try again later,” and definitely no “works only on the 29th of February” jokes.",
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
    <div className="bg-gradient-to-br from-black to-gray-900 text-white h-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient">
          Why Choose Us?
        </h1>
        <h2 className="text-3xl font-bold mb-20 text-center text-white/90">
          We’re the Coupon Crusaders You Deserve!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index}>
              <Card
                imgSrc={card.imgSrc}
                altText={card.altText}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
        {/* Centered Last Two Boxes */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {cards.slice(3).map((card, index) => (
              <div key={index}>
                <Card
                  imgSrc={card.imgSrc}
                  altText={card.altText}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;