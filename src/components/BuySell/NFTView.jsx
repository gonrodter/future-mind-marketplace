import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const slug = location.state.slug;
  const collectionName = location.state.collectionName;
  const collectionImage = location.state.collectionImage;
  const collectionAddress = location.state.collectionAddress;
  const description = location.state.description;

  console.log(id);

  const [owner, setOwner] = useState([]);
  const [collectionMetadata, setCollectionMetadata] = useState([]);
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    fetchOwner();
    fetchCollectionMetadata();
    fetchMetadata();
  }, []);

  const fetchOwner = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/api/v1/asset/${collectionAddress}/${id}/owners?limit=20&order_by=created_date&order_direction=desc`,
        {
          headers: {
            "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
          },
        }
      );

      setOwner(response.data.owners[0].owner);
      console.log("OwnerData", response.data);
      console.log("Owner", response.data.owners[0].owner.address);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCollectionMetadata = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/api/v2/traits/${slug}`,
        {
          headers: {
            "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
          },
        }
      );

      setCollectionMetadata(response.data.counts);
      console.log("CollectionMetadata", response.data.counts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMetadata = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/api/v2/chain/ethereum/contract/${collectionAddress}/nfts/${id}`,
        {
          headers: {
            "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
          },
        }
      );

      setMetadata(response.data.nft.traits);
      console.log("Metadata", response.data.nft.traits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Crear un objeto para almacenar la suma de cada tipo de rasgo
  const sumOfTraits = {};

  // Recorrer los rasgos en el objeto 'traits'
  for (const traitType in collectionMetadata) {
    // Obtener el objeto de rasgos de un tipo específico
    const traitData = collectionMetadata[traitType];

    // Calcular la suma de los valores de cada rasgo en este tipo
    const traitSum = Object.values(traitData).reduce(
      (acc, value) => acc + value,
      0
    );

    // Almacenar la suma en el objeto 'sumOfTraits'
    sumOfTraits[traitType] = traitSum;
  }

  // Ahora, 'sumOfTraits' contendrá la suma de cada tipo de rasgo
  console.log(sumOfTraits);

  //! Cambiar esta variable por una prop con los metadatos del NFT
  const data = [
    { type: "Background", name: "Light Pink", percentage: 11.61 },
    { type: "Eyes", name: "Light Golden Glow", percentage: 5.34 },
    { type: "Hat", name: "Wisdom Hat", percentage: 2.24 },
    { type: "Clothes", name: "Ck Tie", percentage: 1.6 },
    { type: "Mouth", name: "Whistle", percentage: 5.5 },
    { type: "Body", name: "Blue", percentage: 9.01 },
  ];

  return (
    <div className="block px-12 sm:px-28 md:px-0 py-32 md:py-40 font-body md:flex">
      <div className="md:w-1/2 md:px-12 1.5xl:px-28">
        <img
          className="rounded-md w-full"
          src={image.replace("w=500", "w=1280")}
          alt=""
        />
        <div className="hidden md:block w-full border-2 border-primary-lighter-blue rounded-md p-4 mt-6">
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
      <div className="md:w-1/2 md:pr-12 1.5xl:pr-28 py-8 md:py-0">
        <div>
          <p className="text-primary-blue font-bold">{collectionName}</p>
          <p className="text-secondary-blue  font-semibold text-3xl py-2">
            {collectionName} #{id}
          </p>
          <span className="flex items-center gap-2 text-secondary-blue">
            <p>Owned by</p>
            <img
              className="w-8 rounded-full"
              src={owner.profile_img_url}
              alt="ciberpunk"
            />
            <p>{owner.address}</p>
          </span>
        </div>
        <div className="mt-8">
          <p className="text-secondary-blue">{description}</p>
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
            {metadata.map((trait) => {
              // Compara el trait_type con las claves de sumOfTraits
              if (sumOfTraits.hasOwnProperty(trait.trait_type)) {
                // Calcula el porcentaje como (trait_count / valor de la key en sumOfTraits) * 100
                const percentage = (trait.trait_count / sumOfTraits[trait.trait_type]) * 100;

                return (
                  <Property
                    type={trait.trait_type}
                    name={trait.value}
                    percentage={percentage.toFixed(2)}
                  />
                );
              } else {
                //! Al estar recorriendo metadata (que son los traits que tiene el NFT en sí), nunca entra en el else, por lo que no se van a mostrar los traits que no tenga el NFT
                return (
                  <Property
                    type={trait.trait_type}
                    name={trait.value}
                    percentage={"-"}
                  />
                );
              }
            })}
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