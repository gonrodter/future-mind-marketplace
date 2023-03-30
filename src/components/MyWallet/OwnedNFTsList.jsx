import OwnedNFT from "./OwnedNFT";
import React from "react";

const OwnedNFTsList = () => {
  return (
    <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 px-20 mb-20 font-body">
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
  );
};

export default OwnedNFTsList;
