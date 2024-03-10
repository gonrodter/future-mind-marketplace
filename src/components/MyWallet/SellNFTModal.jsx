import React from "react";
// import { openSeaSDK } from "opensea-js";

const SellNFTModal = ({
  nft,
  visible,
  onClose
}) => {
  //   async function handleListing() {
  //     const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);

  //     const listing = await openSeaSDK.createListing({
  //       asset: {
  //         nft.tokenId,
  //         nft.tokenAddress,
  //       },
  //       nft.accountAddress,
  //       //! This is the price in ETH and has to bet set with the amount entered by the user in the input field
  //       startAmount: 3
  //     });
  //   }

  if (!visible) {
    return null;
  }

  return (
    <div>
      <div className="">
        <span className="" onClick={onClose}>
          &times;
        </span>
        <p>Contenido del modal aquí</p>
      </div>
    </div>
  );
};

export default SellNFTModal;