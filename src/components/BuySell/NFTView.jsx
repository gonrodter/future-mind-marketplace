import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { RiGalleryFill, RiGlobalLine } from "react-icons/ri";
import { BsDiscord, BsTwitter, BsCurrencyDollar } from "react-icons/bs";
import { FaListUl, FaEthereum } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import Property from "./Property";
import Spinner from "../Reutilized/Spinner";
import { useAddress } from "../../contexts/AddressContext";
import {
  fetchOwnerData,
  fetchCollectionMetadata,
  fetchMetadata,
} from "../../fetchers/nftViewFetcher";

const NFTView = (props) => {
  const { address, setDynamicAddress } = useAddress();

  //* Collection data
  const location = useLocation();
  const image = location.state.image;
  const id = location.state.id;
  const slug = location.state.slug;
  const collectionName = location.state.collectionName;
  const collectionImage = location.state.collectionImage;
  const collectionAddress = location.state.collectionAddress;
  const description = location.state.description;
  const testnet = location.state.testnet;

  //* Data to be fetched
  const [owner, setOwner] = useState({
    address: "",
    ownerImage: "",
  });
  const [collectionMetadata, setCollectionMetadata] = useState([]);
  const [metadata, setMetadata] = useState([]);
  const [owned, setOwned] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await Promise.all([
          fetchOwnerData(collectionAddress, id, testnet),
          fetchCollectionMetadata(slug, testnet),
          fetchMetadata(collectionAddress, id, testnet),
        ]).then(([ownerData, collectionMetadata, metadata]) => {
          const { ownerAddress, ownerImage } = ownerData;
          const owner = {
            ownerAddress: ownerAddress,
            ownerImage: ownerImage,
          };
          setOwner(owner);
          setCollectionMetadata(collectionMetadata);
          setMetadata(metadata);
          setOwned(address === owner.ownerAddress);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [collectionAddress, id, testnet, address]);

  if (loading) {
    return <Spinner />;
  }

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
            {collectionImage != null ? (
              <img className="w-8 rounded-full" src={collectionImage} />
            ) : null}
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
            <img className="w-8 rounded-full" src={owner.ownerImage} />
            <p>{owner.ownerAddress}</p>
          </span>
        </div>
        <div className="mt-8">
          <p className="text-secondary-blue">{description}</p>
        </div>
        <div className="mt-10">
          {owned ? (
            <button className="bg-secondary-blue text-white mt-2 py-2 w-32 md:w-40 px-3 rounded-md font-semibold">
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
              const traitType = trait["trait_type"];
              const traitValue = trait["value"];

              const totalCountTraitType = Object.values(
                collectionMetadata[traitType]
              ).reduce((sum, count) => sum + count, 0);

              const countTraitValue = collectionMetadata[traitType][traitValue];

              const percentage = (countTraitValue / totalCountTraitType) * 100;

              return (
                <Property
                  type={trait.trait_type}
                  name={trait.value}
                  percentage={
                    percentage.toFixed(2) !== null ||
                    percentage.toFixed(2) !== ""
                      ? percentage.toFixed(2)
                      : null
                  }
                />
              );
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