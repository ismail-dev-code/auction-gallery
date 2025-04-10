import { Suspense } from "react";
import "./App.css";
import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

const auctionsPromise = fetch("./data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <p className="text-center lg:mt-24">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        }
      >
        <ActiveAuctions auctionsPromise={auctionsPromise}></ActiveAuctions>
      </Suspense>
    </>
  );
}

export default App;
