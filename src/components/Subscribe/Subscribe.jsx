import React from "react";

import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div>
          <h1 className="text-2xl !text-center sm:text-left sm:text-3xl transistion-all duration-300 font-semibold">
            Get Notified About New Products
          </h1>
          <input
            //data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-xl focus:outline-none focus:border-2 focus:border-[#df981f] mt-3 text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
