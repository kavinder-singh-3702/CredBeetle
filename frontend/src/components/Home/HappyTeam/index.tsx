import React from "react";

const index = () => {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-center text-4xl mb-5 text-cyan-400">
          Our happy team
        </h1>
        <p className="text-center mb-14 text-lg">
          Meet our creative team, those who have passion to work and make our
          clients more comfortable and happy.
        </p>
      </div>
      <div className="flex">
        <div>
          <div>
            {" "}
            <img src="/1.png" className="mr-20 rounded-full h-40 w-40" />
          </div>

          <div>
            {" "}
            <h1 className="text-center">Steffan Cagle</h1>
            <h3 className="text-center">Engineer</h3>
            <p className="text-center">
              {" "}
              "What we usually consider as impossible are simply engineering
              problems… there’s no law of physics preventing them."
            </p>
          </div>
        </div>
        <div>
          <img src="/2.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/5.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/6.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/7.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/11.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/12.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
        <div>
          <img src="/eight.png" className="mr-20 rounded-full h-40 w-40" />
        </div>
      </div>
    </div>
  );
};

export default index;
