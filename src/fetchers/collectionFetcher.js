// collectionApi.js
import axios from "axios";

export const fetchCollectionNfts = async (contract, testnet) => {
  try {
    const response = await axios.get(
      `https://${testnet ? "testnets-api" : "api"}.opensea.io/v2/chain/${
        testnet ? "goerli" : "ethereum"
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
