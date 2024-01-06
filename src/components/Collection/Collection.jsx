import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
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
          fetchCollectionNfts(),
          fetchCollectionData(),
          fetchCollectionStats(),
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const fetchCollectionNfts = async () => {
    try {
      if (testnet) {
        const response = await axios.get(
          `https://testnets-api.opensea.io/v2/chain/goerli/contract/${contract}/nfts?limit=50`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );

        setNfts(response.data.nfts);
        console.log("CollectionNfts", response.data);
      } else {
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
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchCollectionData = async () => {
    try {
      if (testnet) {
        const response = await axios.get(
          `https://testnets-api.opensea.io/api/v2/collections/${slug}`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );

        setCollectionData(response.data);
        setModifiedBannerImageUrl(
          response.data.banner_image_url.replace("w=500", "w=1280")
        );
        console.log("CollectionData", response.data);
      } else {
        const response = await axios.get(
          `https://api.opensea.io/api/v2/collections/${slug}`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );

        setCollectionData(response.data);
        setModifiedBannerImageUrl(
          response.data.banner_image_url.replace("w=500", "w=1280")
        );
        console.log("CollectionData", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCollectionStats = async () => {
    try {
      if (testnet) {
        const response = await axios.get(
          `https://testnets-api.opensea.io/api/v2/collections/${slug}/stats`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );

        setCollectionStats(response.data.total);
        console.log("CollectionStats", response.data);
      } else {
        const response = await axios.get(
          `https://api.opensea.io/api/v2/collections/${slug}/stats`,
          {
            headers: {
              "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
            },
          }
        );

        setCollectionStats(response.data.total);
        console.log("CollectionStats", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
