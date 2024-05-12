import React from "react";
// import { WALLET_ADDRESS, sdk } from "../../utils/openSeaConfig";

const SellNFTModal = ({
  nft,
  visible,
  onClose
}) => {

  // const createListing = async () => {
  //   let tokenAddress = nft.contract;
  //   let tokenId = nft.identifier;
  //   //! setear el precio segun valor del input
  //   let listingAmount = 3;

  //   const listing = {
  //     accountAddress: WALLET_ADDRESS,
  //     startAmount: listingAmount,
  //     asset: {
  //       tokenAddress: tokenAddress,
  //       tokenId: tokenId,
  //     },
  //   };

  //   try {
  //     const response = await sdk.createListing(listing);
  //     console.log(
  //       "Successfully created a listing with orderHash:",
  //       response.orderHash
  //     );
  //   } catch (error) {
  //     console.error("Error in createListing:", error);
  //   }
  // };

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