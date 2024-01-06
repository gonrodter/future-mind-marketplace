import React, { useState, useEffect } from "react";
import axios from "axios";
import TopCollection from "./TopCollection";
import Dropdown from "./Dropdown";

const TopCollections = () => {

  const [topCollections, setTopCollections] = useState([]);
  const [selectedTime, setSelectedTime] = useState("24h");

  useEffect(() => {
    fetchTopCollections();
  }, [selectedTime]);

  const handleTimeFilterChange = (selectedTime) => {
    setSelectedTime(selectedTime);
  };

  const fetchTopCollections = async () => {
    try {

      const response = await axios.get(
        `https://data-api.nftgo.io/eth/v1/market/rank/collection/${selectedTime}?by=volume&with_rarity=false&asc=false&offset=0&limit=12`,
        {
          headers: {
            "X-API-KEY": "f86838e7-7772-421f-9205-2ed822f1dfac",
          },
        }
      );

      setTopCollections(response.data.collections);
      console.log("topCollectionsData", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="font-body pb-32">
      <div className="flex justify-center text-center text-2xl font-semibold text-primary-blue items-center">
        <p>Top collections:</p>
        <Dropdown onTimeFilterChange={handleTimeFilterChange} />
      </div>
      <div className="grid justify-center items-center grid-cols-1 1.5md:grid-flow-col 1.5md:grid-cols-2 1.5md:grid-rows-6 1.5xl:grid-cols-3 1.5xl:grid-rows-4 mx-auto px-0 pt-10 gap-y-4 1.5md:gap-x-20 w-350px xs:w-400px 1.5md:w-750px 1.25lg:w-1000px 1.5xl:w-1300px">
        {topCollections.map((collection, index) => (
          <TopCollection
            index={index}
            contract={collection.contracts[0]}
            image={collection.logo}
            name={collection.name}
            floor_price={collection.floor_price_eth.toFixed(2)}
            percentage={`${
              collection.market_cap_change_percentage != null
                ? collection.market_cap_change_percentage.toFixed(2) == 0.00 ? 0 : collection.market_cap_change_percentage.toFixed(2)
                : 0
            }`}
            volume={collection.volume_eth.toFixed(2)}
            slug={collection.opensea_slug}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCollections;