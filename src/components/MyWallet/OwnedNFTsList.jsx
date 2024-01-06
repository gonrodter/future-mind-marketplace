import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import OwnedNFT from './OwnedNFT';
import { useAddress } from "../../contexts/AddressContext";

const OwnedNFTsList = () => {
  const [nfts, setNfts] = useState([]);
  const { address, setDynamicAddress } = useAddress();

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch(
          `https://testnets-api.opensea.io/api/v2/chain/goerli/account/${address}/nfts`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );
        const data = await response.json();
        console.log('Owned NFTs: ', data);
        setNfts(data.nfts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNFTs();
  }, []);

    return (
      <div className="flex justify-around px-12">
        <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 my-20 font-body">
          {nfts.map((nft) => (
            <Link
              to="/nft"
              state={{
                id: nft.identifier,
                slug: nft.collection,
                collectionName: nft.collection,
                collectionImage: null,
                collectionAddress: nft.contract,
                image: nft.image_url,
                description: nft.description,
                testnet: true
              }}
            >
              <OwnedNFT nft={nft} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default OwnedNFTsList;
