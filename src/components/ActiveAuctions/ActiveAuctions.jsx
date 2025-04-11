import ActiveAuction from "../ActiveAuction/ActiveAuction";

const auctionsPromise = fetch("./data.json").then((res) => res.json());

const ActiveAuctions = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-10/12 mx-auto lg:pt-24">
        <h1 className="text-3xl">Active Auctions</h1>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>

      <ActiveAuction auctionsPromise={auctionsPromise}></ActiveAuction>
    </div>
  );
};

export default ActiveAuctions;
