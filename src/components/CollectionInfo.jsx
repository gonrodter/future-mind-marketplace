import wizard from "../assets/pink_wizard_cheetah.png";
import angry from "../assets/pinky_angry_tiger.png";
import pirate from "../assets/pirate_tyga.png";
import robo from "../assets/robo.png";
import snipe from "../assets/snipe.png";
import cheetah from "../assets/yellow_cheetah.png";
import turkish from "../assets/turkish_pirate.png";
import { RiLightbulbLine } from "react-icons/ri";

const CollectionInfo = () => {
  return (
    <div className="font-body h-screen linear-bg">
      <div className="flex justify-around uppercase text-primary-blue text-center py-12 px-52 glass items-center">
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
      <div className="flex justify-around py-10">
        <div className="glass p-8">
          <img className="h-48" src={wizard} alt="nft"></img>
        </div>
        <div className="glass p-8">
          <img className="h-48" src={angry} alt="nft"></img>
        </div>
        <div className="glass p-8">
          <img className="h-48" src={robo} alt="nft"></img>
        </div>
        <div className="glass p-8">
          <img className="h-48" src={turkish} alt="nft"></img>
        </div>
        <div className="glass p-8">
          <img className="h-48" src={cheetah} alt="nft"></img>
        </div>
        <div className="glass p-8">
          <img className="h-48" src={snipe} alt="nft"></img>
        </div>
      </div>
      <div className="px-96 pt-10">
        <p className="flex items-center text-xl uppercase text-secondary-blue font-bold mb-4">
          Easy steps <span className="pl-1"><RiLightbulbLine /></span>
        </p>
        <p className="text-4xl uppercase text-secondary-blue font-extrabold">
          How to mint
        </p>
        <div className="flex justify-between pt-20">
          <div className="flex items-center text-left">
            <p className="text-8xl uppercase outlined-text text-purple-600 font-extrabold mr-4 ">
              1
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Connect Your <br /> Wallet
            </p>
          </div>
          <div className="flex items-center text-left">
            <p className="text-8xl uppercase outlined-text text-green-600 font-extrabold mr-4 ">
              2
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Select your <br /> Quantity
            </p>
          </div>
          <div className="flex items-center text-left">
            <p className="text-8xl uppercase outlined-text text-yellow-400 font-extrabold mr-4 ">
              3
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Confirm the <br /> transaction
            </p>
          </div>
          <div className="flex items-center text-left">
            <p className="text-8xl uppercase outlined-text text-red-500 font-extrabold mr-4 ">
              4
            </p>
            <p className="text-xl uppercase text-primary-blue font-bold mb-4">
              Receive your <br /> NFTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
