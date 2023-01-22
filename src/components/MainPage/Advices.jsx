import Wallet from "../../assets/wallet.png";
import Credit_Card from "../../assets/credit_card.png";
import Dollar from "../../assets/dollar.png";
import React from "react";

const Advices = () => {
  return (
    <div className="min-h-screen flex font-body">
      <div className="w-full bg-gray-100 my-52">
        <div className="m-16">
          <p className="text-center font-bold text-3xl text-primary-blue">
            Here are some advices
          </p>
        </div>
        <div className="flex justify-center items-center mt-28">
          <div className="w-1/3 text-center">
            <img className="m-auto" src={Wallet} alt="Wallet" />
            <p className="font-semibold text-xl text-primary-blue mt-4">
              Set up your wallet
            </p>
            <p className="mt-6 mx-28 text-md text-primary-lighter-blue">
              Choose a wallet to buy and sell NFTs on Future Mind! We support
              MetaMask, with more to be added in the future.
            </p>
          </div>
          <div className="w-1/3 text-center">
            <img className="m-auto" src={Credit_Card} alt="Wallet" />
            <p className="font-semibold text-xl text-primary-blue mt-4">
              Buy an NFT
            </p>
            <p className="mt-6 mx-28 text-md text-primary-lighter-blue">
              Check out the hottest NFTs on our marketplace! You can also filter
              by a specific collection if you already know what you’re looking
              for.
            </p>
          </div>
          <div className="w-1/3 text-center">
            <img className="m-auto" src={Dollar} alt="Wallet" />
            <p className="font-semibold text-xl text-primary-blue mt-4">
              Sell an NFT
            </p>
            <p className="mt-6 mx-28 text-md text-primary-lighter-blue">
              Easily sell any NFT from a connected wallet! You can update the
              price or unlist your NFT if you change your mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advices;
