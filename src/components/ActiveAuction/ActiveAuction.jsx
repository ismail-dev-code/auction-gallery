import React from "react";
import Heart from "../../assets/icons/Heart";

const ActiveAuction = ({ auction }) => {
//   console.log(auction);
  return (
    <div className="w-10/12 mx-auto lg:mt-16">
      
      <div className="w-[70%] overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Item: {auction.id}</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex gap-2">
                  <img
                    className="w-22 h-22 rounded-md"
                    src={auction.image}
                    alt="pic"
                  />{" "}
                  <h2 className="pt-3">{auction.title}</h2>
                </div>
              </td>
              <td className="text-center">${auction.currentBidPrice}</td>
              <td className="text-center">{auction.timeLeft}</td>
              <td className="text-center">
                <button>
                  <Heart></Heart>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
};

export default ActiveAuction;
