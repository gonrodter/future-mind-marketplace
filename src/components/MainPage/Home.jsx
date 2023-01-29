import CK from "../../assets/CK_tie.png";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex items-center font-body">
      <div className="px-12 md:w-1/2 md:pl-12 md:pr-6 lg:pl-20 lg:pr-10 xl:pl-40 xl:pr-20 2xl:pl-56 2xl:pr-36">
        <p className=" text-6xl font-bold text-primary-blue">
          Discover, collect and sell NFts
        </p>
        <div className="mt-10 text-xl text-primary-lighter-blue">
          <p>
            Discover the art behind NFTs, support creators and join this amazing
            community
          </p>
        </div>
        <div className="mt-10 w-full flex gap-6 text-center md:text-left">
          <button className="text-center bg-secondary-blue text-white mt-4 py-2 w-32 lg:w-40 px-3 rounded-md font-semibold">
            Marketplace
          </button>
          <button className="text-center bg-secondary-blue text-white mt-4 py-2 w-32 lg:w-40 px-4 rounded-md font-semibold">
            Collections
          </button>
        </div>
      </div>
      <div className="hidden w-1/2 md:flex">
        <div class="w-650px md:px-20 lg:px-32 xl:pl-56">
          <img className="block rounded-t-md" src={CK} />
          <div className=" rounded-b-md shadow-xl border-2 border-t-0">
            <p className="text-2xl text-primary-blue font-semibold p-4">
              Chilled Kongs
            </p>
            <p className="text-base text-primary-lighter-blue px-4 pb-4">
              Each one is unique, but they all have one thing in common: they
              are experts in enjoying the good things in life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
