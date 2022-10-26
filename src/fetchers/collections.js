import axios from "axios";

export const fetchCollections = async () => {
    console.log("Fetching Collections");
    const response = await axios.get(
      "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/collections?verified=true&apiKey=QupDSCuBm3VslwauyyUEEoUicN8kDurxC2i-PCwPjLuAHClQ"
    );
    const collections = response.data;

    console.log("Collections: ", collections);
    return collections;
};