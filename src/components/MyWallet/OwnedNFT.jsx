import CK from "../../assets/CK_tie.png";
import React from "react";
import { Link } from "react-router-dom";

const OwnedNFT = ({ nft }) => {
  return (
    <div className="w-64">
      <img className="rounded-t-md " src={nft.image_url} />
      <div className="rounded-b-md shadow-xl border-2 border-t-0">
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
