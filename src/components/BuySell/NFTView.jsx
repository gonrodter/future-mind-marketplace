import React from "react";
import gangstaCK from "../../assets/gangsta_ck.png";
import CK from "../../assets/CK_tie.png";
import ciberpunk from "../../assets/moustache_cyberpunk.png";
import { RiGalleryFill, RiGlobalLine } from "react-icons/ri";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import Property from "./Property";

const NFTView = () => {
    //! Cambiarlo por una prop
    const owned = Boolean(1);

    const data = [{type: "Background", name: "Light Pink", percentage: 11.61}, {type: "Eyes", name: "Light Golden Glow", percentage: 5.34}, {type: "Hat", name: "Wisdom Hat", percentage: 2.24}, {type: "Clothes", name: "Ck Tie", percentage: 1.60}, {type: "Mouth", name: "Whistle", percentage: 5.50}, {type: "Body", name: "Blue", percentage: 9.01}]
    
    return (
      <div className="py-32 font-body flex">
        <div className="w-1/2 px-12">
          {/* //!Sustituir imagen del nft por una prop */}
          <img className="rounded-md" src={gangstaCK} alt="CK" />
          <div className="w-full border-2 border-primary-lighter-blue rounded-md p-4 mt-6">
            <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
              <RiGalleryFill />
              {/* //!Sustituir nombre de la coleccion por una prop */}
              <p className="pl-2">About Chilled Kongs</p>
            </div>
            <div className="flex mt-4 items-center text-primary-blue gap-4">
              {/* //!Sustituir imagen de la coleccion por una prop */}
              <img className="w-8 rounded-full" src={CK} alt="CK" />
              <BsTwitter size={20} />
              <BsDiscord size={20} />
              <RiGlobalLine size={20} />
            </div>
          </div>
        </div>
        <div className="w-1/2 pr-12">
          <div>
            {/* //!Sustituir nombre de la coleccion por una prop */}
            <p className="text-primary-blue font-bold">Chilled Kongs</p>
            {/* //!Sustituir nombre del nft por una prop */}
            <p className="text-secondary-blue  font-semibold text-3xl py-2">
              Chilled Kong #1132
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
              <button className="bg-secondary-blue text-white mt-4 py-2 w-32 md:w-40 px-3 rounded-md font-semibold">
                Buy NFT
              </button>
            )}
          </div>
          <div className="mt-10 p-4 rounded-md border-2 border-primary-lighter-blue">
            <div className="flex text-secondary-blue font-semibold items-center border-b-2 ">
              <FaListUl />
              <p className="pl-2">Properties</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/*//! Crear un loop para recorrer todas las properties y crear un componente para cada una */}
              {data.map((nft) => (
                <Property
                  type={nft.type}
                  name={nft.name}
                  percentage={nft.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default NFTView;