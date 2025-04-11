import { use, useState } from "react";
import Heart from "../../assets/icons/Heart";

const ActiveAuction = ({ auctionsPromise }) => {
  const data = use(auctionsPromise);
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorite = (item) => {
    const result = favorites.find((fav) => fav.id === item.id);
   

    if (!result) {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div className="w-10/12 mx-auto flex lg:mt-16">
      <div className="w-[70%] shadow-2xl rounded-2xl overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Item:</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((auction) => <tr key={auction.id}>
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
                <button
                  onClick={() => handleAddToFavorite(auction)}
                  className="cursor-pointer"
                >
                  <Heart />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <div className="w-[30%]">
        <div className="text-2xl">
          <h2 className="flex items-center gap-1.5">
            <Heart />
            Favorite Items
          </h2>
        </div>

        <div className="space-y-3">
          {favorites.length === 0 ? (
            <p className="text-gray-500">No favorite items yet.</p>
          ) : (
            favorites.map((fav) => (
              <div
                key={fav.id}
                className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg shadow-sm"
              >
                <img src={fav.image} alt={fav.title} className="w-12 h-12 rounded-md" />
                <div>
                  <h3 className="font-medium">{fav.title}</h3>
                  <p className="text-sm text-gray-600">${fav.currentBidPrice}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveAuction;
