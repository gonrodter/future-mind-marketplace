import axios from "axios";

export const fetchOwnerData = async (collectionAddress, id, testnet) => {

  try {
    const response = await axios.get(
      `https://${testnet ? "testnets-api" : "api"}.opensea.io/api/v2/chain/${
        testnet ? "goerli" : "ethereum"
      }/contract/${collectionAddress}/nfts/${id}/asset/${collectionAddress}/${id}`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );

    const ownerAddress = response.data.nft.owners[0].address;
    console.log('owner add', ownerAddress);

    const imageResponse = await axios.get(
      `https://${
        testnet ? "testnets-api" : "api"
      }.opensea.io/api/v2/accounts/${ownerAddress}`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );

    const ownerImage = imageResponse.data.profile_image_url;
    const owner = {
      ownerAddress: ownerAddress,
      ownerImage: ownerImage,
    };

    return owner;
  } catch (error) {
    console.error("Error fetching owner data:", error);
    return null;
  }
};

export const fetchCollectionMetadata = async (slug, testnet) => {
  try {
    const response = await axios.get(
      `https://${
        testnet ? "testnets-api" : "api"
      }.opensea.io/api/v2/traits/${slug}`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );

    return response.data.counts;
  } catch (error) {
    console.error("Error fetching collection metadata:", error);
    return [];
  }
};

export const fetchMetadata = async (collectionAddress, id, testnet) => {
  try {
    const response = await axios.get(
      `https://${testnet ? "testnets-api" : "api"}.opensea.io/api/v2/chain/${
        testnet ? "goerli" : "ethereum"
      }/contract/${collectionAddress}/nfts/${id}`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );

    return response.data.nft.traits;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return [];
  }
};
