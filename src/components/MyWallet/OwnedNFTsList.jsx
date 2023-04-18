import OwnedNFT from "./OwnedNFT";
import React from "react";
import SearchBar from "./SearchBar";

const OwnedNFTsList = () => {
  return (
    <div className="px-20">
      <SearchBar />
      <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 my-20 font-body">
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
        <OwnedNFT />
      </div>
    </div>
  );
};

export default OwnedNFTsList;
