import defaultImg from "../../assets/default-image.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const OwnedNFT = ({ nft }) => {

  return (
    <div className="w-64 rounded-xl shadow-xl border-2 overflow-hidden">
      <Link
        to="/nft"
        state={{
          id: nft.identifier,
          slug: nft.collection,
          collectionName: nft.collection,
          collectionImage: null,
          collectionAddress: nft.contract,
          image: nft.image_url,
          description: nft.description,
          testnet: true,
        }}
      >
        <img
          className="rounded-t-md "
          src={nft.image_url ? nft.image_url : defaultImg}
        />
      </Link>
      <div>
        <Link
          to="/collection"
          state={{
            testnet: true,
            contract: nft.contract,
            slug: nft.collection,
          }}
        >
          <p className="text-xl text-primary-blue font-semibold px-4 pt-4 pb-2">
            {nft.collection}
          </p>
        </Link>
        <p className="text-base text-primary-lighter-blue pl-4 pb-2">
          {nft.identifier}
        </p>
        <div className="flex justify-center w-full pb-6">
          <button className=" rounded-sm text-white bg-secondary-blue font-semibold px-10 py-2">
            Sell NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnedNFT;
