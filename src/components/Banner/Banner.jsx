import "./Banner.css";

import React from "react";

const Banner = () => {
  return <div className="banner">
   <div className="lg:ml-12 text-white h-full flex flex-col justify-center text-left space-y-0.5 w-2/6">
   <h1 className="text-3xl font-bold">Bid on Unique Items from
    Around the World</h1>
    <p className="text-xl">Discover rare collectibles, luxury goods, and vintage
    treasures in our curated auctions</p>
    <button className="btn w-fit mt-4">Explore Auctions</button>
    
   </div>
  </div>;
};

export default Banner;
