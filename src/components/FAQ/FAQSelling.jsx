import React from "react";
import howToBuy from "../../assets/how-to-buy.png";

const FAQSelling = () => {
  return (
    <div className="pt-32 pb-10 font-body mx-12">
      <div className="flex flex-col mx-auto max-w-6xl">
        <p className="text-center font-bold text-5xl text-secondary-blue">
          How to sell an NFT
        </p>
        <div className="flex flex-col gap-6 mt-10">
          <p className="text-center text-lg text-primary-blue lg:text-left">
            Any NFT that you own can be sold with a few simple steps.
          </p>
          <p className="text-center text-lg text-primary-blue lg:text-left ml-6">
          1. Head over to the My NFTs tab in your Profile, here you should be able
          to see all your owned NFTs.
          <br />
          2. Simply click on the Sell NFT button to put your NFT up for sale, at a
          price of your choice.
          </p>
          <p className="text-center text-lg text-primary-blue lg:text-left">
            Keep in mind that there will be a service fee of 2% in addition to
            any royalty fees set by the creator displayed before listing.{" "}
          </p>
          <img
            className="border border-primary-lighter-blue shadow-lg rounded-2xl"
            src={howToBuy}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSelling;
