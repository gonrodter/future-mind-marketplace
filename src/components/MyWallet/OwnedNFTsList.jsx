import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import OwnedNFT from './OwnedNFT';
import { useAddress } from "../../contexts/AddressContext";
import { fetchOwnedNFTs } from "../../fetchers/ownedNFTListFetcher";

const OwnedNFTsList = ({ search }) => {
  const [nfts, setNfts] = useState([]);
  const { address, setDynamicAddress } = useAddress();

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const ownedNFTs = await fetchOwnedNFTs(address);

        const filteredNFTs = ownedNFTs.filter((nft) =>
          nft.collection.toLowerCase().startsWith(search.toLowerCase())
        );

        setNfts(filteredNFTs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNFTs();
  }, [address, search]);

  return (
    <div className="flex justify-around px-12 transition-opacity duration-500">
      {nfts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 my-20 font-body">
          {nfts.map((nft) => (
            <OwnedNFT nft={nft} key={nft.id} />
          ))}
        </div>
      ) : (
        <p className="min-h-screen text-center font-semibold text-secondary-blue my-8">
          No matching NFTs found.
        </p>
      )}
    </div>
  );
};

export default OwnedNFTsList;
