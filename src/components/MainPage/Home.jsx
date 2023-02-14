import CK from "../../assets/CK_tie.png";
import React from "react";

const Home = () => {
  return (
    <div className="py-32 md:py-0 md:min-h-screen flex items-center font-body">
      <div className="mx-12 md:w-1/2 xl:w-2/3 text-center">
        <div className="text-left m-auto xl:w-640px">
          <p className="text-6xl font-bold text-primary-blue">
            Discover, collect and sell NFts
          </p>
          <div className="mt-10 text-xl text-primary-lighter-blue">
            <p>
              Discover the art behind NFTs, support creators and join this
              amazing community
            </p>
          </div>
          <div className="mt-10 w-full flex justify-center gap-10 md:gap-6 lg:gap-10 xl:gap-16 md:justify-start">
            <button className="bg-secondary-blue text-white mt-4 py-2 w-32 md:w-40 px-3 rounded-md font-semibold">
              Marketplace
            </button>
            <button className="bg-secondary-blue text-white mt-4 py-2 w-32 md:w-40 px-4 rounded-md font-semibold">
              Collections
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 md:justify-center xl:w-1/3 xl:justify-start">
        <div class="w-350px pl-12">
          <img className="rounded-t-md" src={CK} />
          <div className="rounded-b-md shadow-xl border-2 border-t-0">
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
