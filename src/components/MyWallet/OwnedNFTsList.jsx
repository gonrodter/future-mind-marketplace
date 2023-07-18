import React, { useEffect, useState } from 'react';
import OwnedNFT from './OwnedNFT';

const OwnedNFTsList = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const options = { method: "GET" };
        const myWallet = "0x2bd07b42757D5af6B6c40021E1F5319aF9e7Ccbf";
        const response = await fetch(
          `https://testnets-api.opensea.io/api/v1/assets?owner=${myWallet}`,
          options
        );
        const data = await response.json();
        console.log(data);
        setNfts(data.assets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNFTs();
  }, []);

    return (
      <div className="flex justify-around px-20">
        <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 my-20 font-body">
          {nfts.map((nft) => (
          <OwnedNFT nft={nft} />
        ))}
        </div>
      </div>
    );
  };

export default OwnedNFTsList;
