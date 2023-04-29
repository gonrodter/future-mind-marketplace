import OwnedNFT from "./OwnedNFT";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import SearchBar from "./SearchBar";

  function OwnedNFTsList() {

    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://api.opensea.io/api/v1";
    const ownerAddress = process.env.REACT_APP_MY_WALLET; // replace with your wallet address
    const network = "goerli"; // replace with your desired network
    const API_KEY = process.env.REACT_APP_OPENSEA_API_KEY;

    useEffect(() => {
      async function getNFTs() {
        try {
          const response = await fetch(
            `${API_URL}/assets?owner=${ownerAddress}&order_direction=desc&offset=0&limit=50&network=${network}`,
            {
              headers: { "X-API-KEY": API_KEY },
            }
          );

          const { assets } = await response.json();
          const nfts = assets.map(({ id, name, image_url }) => ({
            id,
            name,
            imageURI: image_url,
          }));
          setNfts(nfts);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }

      getNFTs();
    }, []);

    return (
      <div>
        {loading && <p>Loading...</p>}
        {!loading && nfts.length === 0 && <p>You don't have any NFTs.</p>}
        {!loading &&
          nfts.map((nft) => (
            <div key={nft.id}>
              <img src={nft.imageURI} alt={nft.name} />
              <p>{nft.name}</p>
            </div>
          ))}
      </div>
    );

    // return (
    //   <div className="px-20">
    //     <SearchBar />
    //     <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 my-20 font-body">
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //       <OwnedNFT />
    //     </div>
    //   </div>
    // );
  }

export default OwnedNFTsList;
