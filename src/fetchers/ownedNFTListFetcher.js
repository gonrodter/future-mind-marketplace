export const fetchOwnedNFTs = async (address) => {
  try {
    const response = await fetch(
      `https://testnets-api.opensea.io/api/v2/chain/sepolia/account/${address}/nfts`,
      {
        headers: {
          "X-API-KEY": "1e89dfd6e7c144cfa18e35dcfb03e13c",
        },
      }
    );
    const data = await response.json();
    console.log("Owned NFTs: ", data);

    return data.nfts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
