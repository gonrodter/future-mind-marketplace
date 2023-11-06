import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CollectionHeader from "./CollectionHeader";
import CollectionNft from "./CollectionNft";


const Collection = () => {
  const location = useLocation();
  const contract = location.state.contract;
  const slug = location.state.slug;
  const floor_price = location.state.floor_price;

  const [modifiedBannerImageUrl, setModifiedBannerImageUrl] = useState(null); 

  const [nfts, setNfts] = useState([]);
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    fetchCollectionNfts();
    fetchCollectionData();
  }, []);

  const fetchCollectionNfts = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/v2/chain/ethereum/contract/${contract}/nfts?limit=50`,
        {
          headers: {
            "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
          },
        }
      );

      setNfts(response.data.nfts);
      console.log("CollectionNfts", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchCollectionData = async () => {
    try {
      const response = await axios.get(
        `https://api.opensea.io/api/v1/collection/${slug}`,
        {
          headers: {
            "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
          },
        }
      );

      setCollectionData(response.data.collection);
      setModifiedBannerImageUrl(
        response.data.collection.banner_image_url.replace("w=500", "w=1280")
      );
      console.log("CollectionData", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  return (
    <div className="font-body py-16">
      {modifiedBannerImageUrl ? (
        <CollectionHeader
          bannerImage={modifiedBannerImageUrl}
          image={collectionData.image_url}
          name={collectionData.name}
          description={collectionData.description}
          items={collectionData.stats.total_supply}
          floor_price={
            collectionData.stats.floor_price !== null
              ? collectionData.stats.floor_price.toFixed(2)
              : null
          }
          total_volume={
            collectionData.stats.total_volume !== null
              ? collectionData.stats.total_volume.toFixed(2)
              : null
          }
          num_owners={collectionData.stats.num_owners}
        />
      ) : null}

      <div className="flex justify-around px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 my-14 font-body">
          {nfts.map((nft, index) =>
            nft.image_url != null ? (
              <Link
                to="/nft"
                state={{
                  id: nft.identifier,
                  slug: slug,
                  collectionName: collectionData.name,
                  collectionImage: collectionData.image_url,
                  collectionAddress: contract,
                  image: nft.image_url,
                  description: collectionData.description,
                }}
              >
                <CollectionNft
                  key={nft.identifier}
                  image={nft.image_url}
                  id={nft.identifier}
                />
              </Link>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
