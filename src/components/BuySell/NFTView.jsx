import React from "react";
import { useLocation } from "react-router-dom";
import gangstaCK from "../../assets/gangsta_ck.png";
import CK from "../../assets/CK_tie.png";
import ciberpunk from "../../assets/moustache_cyberpunk.png";
import { RiGalleryFill, RiGlobalLine } from "react-icons/ri";
import { BsDiscord, BsTwitter, BsCurrencyDollar } from "react-icons/bs";
import { FaListUl, FaEthereum } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import Property from "./Property";

const NFTView = (props) => {
    //! Cambiarlo por una prop
    const owned = Boolean(0);

    const location = useLocation();
    const image = location.state.image;
    const id = location.state.id;
    const collectionName = location.state.collectionName;
    const collectionImage = location.state.collectionImage;
    
    console.log(id);

    //! Cambiar esta variable por una prop con los metadatos del NFT
    const data = [{type: "Background", name: "Light Pink", percentage: 11.61}, {type: "Eyes", name: "Light Golden Glow", percentage: 5.34}, {type: "Hat", name: "Wisdom Hat", percentage: 2.24}, {type: "Clothes", name: "Ck Tie", percentage: 1.60}, {type: "Mouth", name: "Whistle", percentage: 5.50}, {type: "Body", name: "Blue", percentage: 9.01}]
    
    return (
      <div className="block px-12 sm:px-28 md:px-0 py-32 md:py-40 font-body md:flex">
        <div className="md:w-1/2 md:px-12 1.5xl:px-28">
          <img className="rounded-md" src={image} alt="" />
          <div className="hidden md:block w-full border-2 border-primary-lighter-blue rounded-md p-4 mt-6">
            <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
              <RiGalleryFill />
              <p className="pl-2">About {collectionName}</p>
            </div>
            <div className="flex mt-4 items-center text-primary-blue gap-4">
              <img
                className="w-8 rounded-full"
                src={collectionImage}
                alt="CK"
              />
              <BsTwitter size={20} />
              <BsDiscord size={20} />
              <RiGlobalLine size={20} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pr-12 1.5xl:pr-28 py-8 md:py-0">
          <div>
            <p className="text-primary-blue font-bold">{collectionName}</p>
            <p className="text-secondary-blue  font-semibold text-3xl py-2">
              {collectionName} #{id}
            </p>
            {/* //!Sustituir la address por por una prop */}
            <span className="flex items-center gap-2 text-secondary-blue">
              <p>Owned by</p>
              <img
                className="w-8 rounded-full"
                src={ciberpunk}
                alt="ciberpunk"
              />
              <p>0x2bd..Ccbf</p>
            </span>
          </div>
          <div className="mt-8">
            <p className="text-secondary-blue">
              Bringing back our chill to the CNFT space. Among us, there are
              thousands of Chilled Kongs. Each one is unique, but they all have
              one thing in common: they are experts in enjoying the good things
              in life.
            </p>
          </div>
          <div className="mt-10">
            {owned ? (
              <button className="bg-secondary-blue text-white mt-4 py-2 w-32 md:w-40 px-3 rounded-md font-semibold">
                Sell NFT
              </button>
            ) : (
              <div className="mt-10 p-4 rounded-md border-2 border-primary-lighter-blue">
                <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
                  <BiDollarCircle size={20} />
                  <p className="pl-2">Current Price</p>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <p className="flex text-secondary-blue font-semibold text-2xl py-2 items-center gap-2">
                      <FaEthereum />
                      {/* //!Sustituir por una prop */}
                      98.1
                    </p>
                    <p className="text-secondary-blue">
                      {/* //!Sustituir por una function que saque la conversión */}
                      ($157,555.47)
                    </p>
                  </div>
                  <button className="bg-secondary-blue text-white mt-2 py-2 w-32 md:w-40 px-3 rounded-md font-semibold">
                    Buy NFT
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 p-4 rounded-md border-2 border-primary-lighter-blue">
            <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
              <FaListUl />
              <p className="pl-2">Properties</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {data.map((nft) => (
                <Property
                  type={nft.type}
                  name={nft.name}
                  percentage={nft.percentage}
                />
              ))}
            </div>
          </div>
          <div className="md:hidden w-full border-2 border-primary-lighter-blue rounded-md p-4 mt-6">
            <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
              <RiGalleryFill />
              <p className="pl-2">About {collectionName}</p>
            </div>
            <div className="flex mt-4 items-center text-primary-blue gap-4">
              <img className="w-8 rounded-full" src={collectionImage} alt="CK" />
              <BsTwitter size={20} />
              <BsDiscord size={20} />
              <RiGlobalLine size={20} />
            </div>
          </div>
        </div>
      </div>
      //   TODO: Explore the collection
    );
}

export default NFTView;