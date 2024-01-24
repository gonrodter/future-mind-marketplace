import React from "react";
import howToBuy from "../../assets/how-to-buy.png";

const FAQBuying = () => {
  return (
    <div className="pt-32 pb-10 font-body mx-12">
      <div className="flex flex-col mx-auto max-w-6xl">
        <p className="text-center font-bold text-5xl text-secondary-blue">
          How to buy an NFT
        </p>
        <div className="flex flex-col gap-6 mt-10">
          <p className="text-center text-lg text-primary-blue lg:text-left">
            Buying an asset on the store is really easy.
            <br />
            <br />
            You can click on any NFT you like to go the NFTs page like the one
            shown below.{" "}
          </p>
          <img className="border border-primary-lighter-blue shadow-lg rounded-2xl" src={howToBuy} />
          <p className="text-center text-lg text-primary-blue lg:text-left">
            Simply click on the buy button, read through the details provided
            and sign the transaction using the wallet password you chose
            earlier. Voila!
            <br />
            <br />
            Once bought, the NFT will be visible in your wallet as well as on
            your Future Mind Profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQBuying;