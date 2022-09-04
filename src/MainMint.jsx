import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import ciberpunk from "./assets/moustache_cyberpunk.png";
import roboPunksNFT from "./RoboPunksNFT.json";

const roboPunksNFTAddress = "0x95BCF0c5ceC9Df65113BceAb688B610b5631e7ce";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div className="min-h-screen flex items-center font-body">
      <div className="h-full w-1/2">
        <div className="absolute w-1/2 top-48 pl-60">
          <p className=" text-6xl font-bold text-primary-blue mb-8">
            RoboPunks
          </p>
          <img className="w-2/3 h-full rounded-md " src={ciberpunk} alt="CK" />
        </div>
      </div>
      <div className="h-full w-1/2 px-12">
        <p className=" text-6xl font-bold text-secondary-blue">
          MINT IS LIVE NOW!
        </p>

        <div className="mt-8">
          {isConnected ? (
            <div>
              <div className="flex">
                <div className="border-2 border-secondary-blue rounded-md mr-16">
                  <button
                    onClick={handleDecrement}
                    className="rounded-l-sm text-white bg-secondary-blue px-4 py-2"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={mintAmount}
                    className="w-20 text-secondary-blue text-center py-2 pl-4"
                    readOnly
                  />
                  <button
                    onClick={handleIncrement}
                    className="rounded-r-sm text-white bg-secondary-blue px-4 py-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleMint}
                  className="bg-secondary-blue text-white py-2 w-40 px-4 rounded-md font-semibold mr-16"
                >
                  MINT NOW
                </button>
              </div>
              <div className="mt-6 text-primary-blue font-semibold">
                <p>MAX 3 NFTS PER TX | MINT PRICE 0.02 ETH + GAS</p>
              </div>
            </div>
          ) : (
            <p className="text-secondary-blue">
              You must be connected to Mint.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainMint;
