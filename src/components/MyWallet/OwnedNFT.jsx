import CK from "../../assets/CK_tie.png";
import SellNFTModal from "./SellNFTModal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const OwnedNFT = ({ nft }) => {

  const [showModal, setShowModal] = useState(false);

  const handleSellButton = () => {
    setShowModal(true);
  };

  return (
    <div className="w-64">
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
        <img className="rounded-t-md " src={nft.image_url} />
      </Link>
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
          <button
            className=" rounded-sm text-white bg-secondary-blue font-semibold px-10 py-2"
            onClick={handleSellButton}
          >
            Sell NFT
          </button>
        </div>
      </div>
      <SellNFTModal
        nft={nft}
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default OwnedNFT;
