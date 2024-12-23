import React from "react";

const Index = () => {
  return (
    <div className="bg-black text-white h-full p-10 mb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-6 text-cyan-400 shadow-lg shadow-cyan-500/50">
          Why Credbeetle?
        </h1>
        <p className="text-lg leading-8 text-gray-300">
          Saving money shouldn&apos;t feel like rocket science or a gamble. At
          Credbeetle, we keep it simple: No fake codes. No expired deals. No
          nonsense. Your time and savings matter to us, so we ensure every
          coupon works like magic every single time. Because you deserve savings
          without the drama!
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            What We Bring to the Table
          </h2>
          <p className="text-lg leading-8 text-gray-300 mb-4">
            We&apos;re not just a coupon site; we&apos;re your ultimate savings
            wingman:
          </p>
          <ul className="list-disc list-inside text-lg leading-8 text-gray-300">
            <li className="mb-2">
              <strong className="text-cyan-400">
                Handpicked, Verified Coupons:
              </strong>{" "}
              Every deal is vetted to be 100% legit. If it&apos;s here, it
              works. Period.
            </li>
            <li className="mb-2">
              <strong className="text-cyan-400">
                Discover Hidden Savings:
              </strong>{" "}
              Don&apos;t settle for obvious discounts. We dig deep to bring you
              deals you didn&apos;t even know existed.
            </li>
            <li>
              <strong className="text-cyan-400">All Types of Coupons:</strong>{" "}
              From everyday essentials to rare gems, we&apos;ve got you covered.
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Why We&apos;re Your Perfect Fit
          </h2>
          <p className="text-lg leading-8 text-gray-300 mb-4">
            Other coupon sites are like your flaky friends—sometimes they show
            up, sometimes they don&apos;t. Here&apos;s why we&apos;re different:
          </p>
          <ul className="list-disc list-inside text-lg leading-8 text-gray-300">
            <li className="mb-2">
              <strong className="text-cyan-400">We&apos;re Reliable:</strong> If
              we say it works, it works. No exceptions.
            </li>
            <li className="mb-2">
              <strong className="text-cyan-400">We&apos;re Transparent:</strong>{" "}
              No annoying fine print or misleading offers here.
            </li>
            <li>
              <strong className="text-cyan-400">We&apos;re Fun:</strong> Saving
              money should feel good, and we make sure it does.
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Our Promise to You
          </h2>
          <p className="text-lg leading-8 text-gray-300 mb-4">
            At Credbeetle, we don&apos;t just give you coupons; we give you
            confidence:
          </p>
          <ul className="list-disc list-inside text-lg leading-8 text-gray-300">
            <li className="mb-2">Confidence that every coupon is legit.</li>
            <li className="mb-2">
              Confidence that you&apos;ll never miss out on savings.
            </li>
            <li>Confidence that you&apos;ll keep coming back for more.</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            About Credbeetle
          </h2>
          <p className="text-lg leading-8 text-gray-300 mb-4">
            Born from the frustration of expired and useless coupons, Credbeetle
            is here to rewrite the rules of savings.
          </p>
          <ul className="list-disc list-inside text-lg leading-8 text-gray-300">
            <li className="mb-2">
              <strong className="text-cyan-400">Our Mission:</strong> To ensure
              every deal you find is real, reliable, and ready to use.
            </li>
            <li className="mb-2">
              <strong className="text-cyan-400">Our Vision:</strong> A world
              where no coupon gets wasted, no savings are missed, and every
              customer leaves with a smile.
            </li>
            <li>
              <strong className="text-cyan-400">Our Motto:</strong> If it&apos;s
              displayed, it&apos;s legit.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Index;
