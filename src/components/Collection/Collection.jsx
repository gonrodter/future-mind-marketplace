import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CollectionHeader from "./CollectionHeader";
import CollectionNft from "./CollectionNft";


const Collection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contract = queryParams.get("contract");

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetchCollectionData();
  }, []);

  const fetchCollectionData = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/v2/chain/ethereum/contract/${contract}/nfts?limit=50`,
        {
          headers: {
            "X-API-KEY": "807c956db2014c249fbf773efca3541d",
          },
        }
      );

      setNfts(response.data.nfts);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div className="font-body py-32">
      <CollectionHeader />
      <div className="flex justify-around px-20">
        <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 my-20 font-body">
          {nfts.map((nft, index) =>
            nft.image_url != null ? (
              <CollectionNft
                key={nft.identifier}
                image={nft.image_url}
                id={nft.identifier}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
