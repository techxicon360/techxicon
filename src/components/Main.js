import React from "react";

const Main = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Where Technology Meets <br /> Your Business Vision
        </h1>

        {/* Paragraph */}
        <p className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
          Building the Future of Your Business with <br /> Personalized Solutions
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="w-full sm:w-auto px-8 py-3 bg-[#00CFDD] rounded-md text-white font-semibold text-lg">
            Contact Us
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-[#00CFDD] text-white font-semibold text-lg rounded-md hover:text-white">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
