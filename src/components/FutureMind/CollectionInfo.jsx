import wizard from "../../assets/pink_wizard_cheetah.png";
import angry from "../../assets/pinky_angry_tiger.png";
import pirate from "../../assets/pirate_tyga.png";
import robo from "../../assets/robo.png";
import snipe from "../../assets/snipe.png";
import cheetah from "../../assets/yellow_cheetah.png";
import turkish from "../../assets/turkish_pirate.png";
import { RiLightbulbLine } from "react-icons/ri";
import React from "react";

const CollectionInfo = () => {
  return (
    <div className="font-body h-full pb-10 linear-bg">
      <div className="flex justify-center items-center gap-12 md:gap-28 uppercase text-primary-blue text-center p-12 glass">
        <div>
          <p className="text-5xl font-bold">50</p>
          <p className="text-xl font-semibold mt-2">To be minted</p>
        </div>
        <div>
          <p className="text-5xl font-bold">10</p>
          <p className="text-xl font-semibold mt-2">Attributes</p>
        </div>
        <div>
          <p className="text-5xl font-bold">0.02</p>
          <p className="text-xl font-semibold mt-2">Mint price (ETH)</p>
        </div>
      </div>
      <div className="pt-10">
        <div className="text-center">
          <p className="flex justify-center items-center text-xl uppercase text-secondary-blue font-bold mb-4">
            Easy steps
            <span className="pl-1">
              <RiLightbulbLine />
            </span>
          </p>
          <p className="text-4xl uppercase text-secondary-blue font-extrabold">
            How to mint
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 justify-center items-center py-10 mx-32 lg:mx-10 lg:flex lg:justify-center lg:gap-10 xl:gap-16">
          <div className="flex justify-center items-center text-left">
            <p className="text-8xl uppercase outlined-text text-purple-600 font-extrabold mr-4 ">
              1
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Connect Your <br /> Wallet
            </p>
          </div>
          <div className="flex justify-center items-center text-left">
            <p className="text-8xl uppercase outlined-text text-green-600 font-extrabold mr-4 ">
              2
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Select your <br /> Quantity
            </p>
          </div>
          <div className="flex justify-center items-center text-left">
            <p className="text-8xl uppercase outlined-text text-yellow-400 font-extrabold mr-4 ">
              3
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Confirm the <br /> transaction
            </p>
          </div>
          <div className="flex justify-center items-center text-left">
            <p className="text-8xl uppercase outlined-text text-red-500 font-extrabold mr-4 ">
              4
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Receive your <br /> NFTS
            </p>
          </div>
        </div>
      </div>
      <div className="sm:table sm:border-collapse sm:w-full">
        <div className="hidden p-8 sm:table-cell align-top">
          <img className="block w-full h-auto" src={wizard} alt="nft"></img>
        </div>
        <div className="hidden p-8 xl:table-cell align-top">
          <img className="block w-full h-auto" src={angry} alt="nft"></img>
        </div>
        <div className="flex justify-center sm:p-8 sm:table-cell align-top">
          <img className="h-48 w-48 block sm:w-full sm:h-auto" src={robo} alt="nft"></img>
        </div>
        <div className="hidden p-8 sm:table-cell align-top">
          <img className="block w-full h-auto" src={turkish} alt="nft"></img>
        </div>
        <div className="hidden p-8 md:table-cell align-top">
          <img className="block w-full h-auto" src={cheetah} alt="nft"></img>
        </div>
        <div className="hidden p-8 lg:table-cell align-top">
          <img className="block w-full h-auto" src={snipe} alt="nft"></img>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
