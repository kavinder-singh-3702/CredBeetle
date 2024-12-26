import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">CredBeetle</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-700 hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-700 hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/coupons"
                  className="text-gray-700 hover:text-green-600"
                >
                  Coupons
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-green-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Terms of Service
        </h1>
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            This website is operated by Wakao Foods. Throughout the site, the
            terms "we", "us" and "our" refer to Wakao Foods. Wakao Foods offers
            this website, including all information, tools, and services
            available from this site to you, the user, conditioned upon your
            acceptance of all terms, conditions, policies, and notices stated
            here.
          </p>
          <p className="text-gray-700 mb-4">
            By visiting our site and/or purchasing something from us, you engage
            in our "Service" and agree to be bound by the following terms and
            conditions ("Terms of Service", "Terms"), including those additional
            terms and conditions and policies referenced herein and/or available
            by hyperlink. These Terms of Service apply to all users of the site,
            including without limitation users who are browsers, vendors,
            customers, merchants, and/or contributors of content.
          </p>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By accessing or using Credbeetle’s platform, you affirm that you are
            at least 18 years old or have the consent of a legal guardian to use
            our services. Continued use constitutes acceptance of these Terms.
          </p>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Scope of Services
          </h2>
          <p className="text-gray-700 mb-4">
            Credbeetle provides an online platform for purchasing and redeeming
            coupons. We act as an intermediary between users and businesses
            offering coupons. We are not responsible for the quality, legality,
            or validity of products or services redeemed through these coupons.
          </p>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            For questions or concerns regarding these Terms, you can contact us
            at:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Email: support@credbeetle.com</li>
            <li>Mailing Address: Blah Blah Blah Blah Address</li>
          </ul>
        </section>

        <p className="text-gray-700 mt-8 text-center">
          By using Credbeetle’s platform, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </p>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 Wakao Foods. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
