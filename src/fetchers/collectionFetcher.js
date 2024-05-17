// collectionApi.js
import axios from "axios";

export const fetchCollectionNfts = async (contract, testnet) => {
  try {
    const response = await axios.get(
      `https://${testnet ? "testnets-api" : "api"}.opensea.io/v2/chain/${
        testnet ? "sepolia" : "ethereum"
      }/contract/${contract}/nfts?limit=50`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );

    return response.data.nfts;
  } catch (error) {
    console.error("Error fetching collection NFTs:", error);
    return [];
  }
};

export const fetchCollectionData = async (slug, testnet) => {
  try {
    const response = await axios.get(
      `https://${
        testnet ? "testnets-api" : "api"
      }.opensea.io/api/v2/collections/${slug}`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching collection data:", error);
    return null;
  }
};

export const fetchCollectionStats = async (slug, testnet) => {
  try {
    const response = await axios.get(
      `https://${
        testnet ? "testnets-api" : "api"
      }.opensea.io/api/v2/collections/${slug}/stats`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );
    return response.data.total;
  } catch (error) {
    console.error("Error fetching collection stats:", error);
    return null;
  }
};


export const fetchTopCollections = async () => {
  try {
    const response = await axios.get(
      `https://api.opensea.io/api/v2/collections?chain=ethereum&limit=22&order_by=market_cap`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );
    console.log('Marketplace top collections: ', response.data);
    return response.data.collections;
  } catch (error) {
    console.error("Error fetching TopCollections:", error);
    return null;
  }
};