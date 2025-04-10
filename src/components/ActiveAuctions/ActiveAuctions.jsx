import React, { use } from "react";
import ActiveAuction from "../ActiveAuction/ActiveAuction";

const ActiveAuctions = ({auctionsPromise}) => {
    const auctions = use(auctionsPromise);
    // console.log(auctions);
  return (
    <div>
      <div className="w-10/12 mx-auto lg:mt-24">
      <h1 className="text-3xl">Active Auctions</h1>
      <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>
      {
        auctions.map(auction=> <ActiveAuction key={auction.id} auction={auction}></ActiveAuction>)
      }
    </div>
  );
};

export default ActiveAuctions;
