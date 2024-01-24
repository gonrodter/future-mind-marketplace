import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {
  fetchCollectionNfts,
  fetchCollectionData,
  fetchCollectionStats,
} from "../../fetchers/collectionFetcher";
import CollectionHeader from "./CollectionHeader";
import CollectionNft from "./CollectionNft";
import Spinner from "../Reutilized/Spinner";
import defaultImage from "../../assets/default-image.png";


const Collection = () => {
  const location = useLocation();
  const contract = location.state.contract;
  const slug = location.state.slug;
  const testnet = location.state.testnet;

  const [loading, setLoading] = useState(true);

  const [modifiedBannerImageUrl, setModifiedBannerImageUrl] = useState(null); 

  const [nfts, setNfts] = useState([]);
  const [collectionData, setCollectionData] = useState([]);
  const [collectionStats, setCollectionStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await Promise.all([
          fetchCollectionNfts(contract, testnet),
          fetchCollectionData(slug, testnet),
          fetchCollectionStats(slug, testnet),
        ]).then(([collectionNFTs, collectionData, collectionStats]) => {
          setNfts(collectionNFTs);
          setCollectionData(collectionData);
          setModifiedBannerImageUrl(
            collectionData.banner_image_url.replace("w=500", "w=1280")
          );
          setCollectionStats(collectionStats);
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, contract, testnet]);

  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div className="font-body py-16">
      <CollectionHeader
        bannerImage={
          modifiedBannerImageUrl ? modifiedBannerImageUrl : defaultImage
        }
        image={
          collectionData.image_url !== ""
            ? collectionData.image_url
            : defaultImage
        }
        name={collectionData.name}
        description={collectionData.description}
        items={collectionData.total_supply}
        floor_price={
          collectionStats.floor_price !== null ||
          collectionStats.floor_price !== ""
            ? collectionStats.floor_price.toFixed(2)
            : null
        }
        total_volume={
          collectionStats.volume !== null
            ? collectionStats.volume.toFixed(2)
            : null
        }
        num_owners={collectionStats.num_owners}
      />

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
                  testnet: testnet,
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
