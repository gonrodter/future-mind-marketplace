import React, { useState, useEffect } from "react";
import axios from "axios";
import TopCollection from "./TopCollection";
import gangsta_ck from "../../assets/gangsta_ck.png";
import moustache_cyberpunk from "../../assets/moustache_cyberpunk.png";
import ape_society from "../../assets/ape_society.png";
import clay_nation from "../../assets/clay_nation.png";
import boss_rocket from "../../assets/boss_rocket.png";
import mallard from "../../assets/mallard.png";
import oremob from "../../assets/oremob.png";
import pavia from "../../assets/pavia.png";
import DEADPXLZ from "../../assets/DEADPXLZ.jpg";
import yummi from "../../assets/yummi.jpg";
import space_bud from "../../assets/space_bud.png";
import magic_kong from "../../assets/magic_kong.png";
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // const data = [
    //   {
    //     image: gangsta_ck,
    //     name: "Chilled Kong",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: moustache_cyberpunk,
    //     name: "Tiger Society",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: ape_society,
    //     name: "The Ape Society",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: clay_nation,
    //     name: "Clay Nation",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: boss_rocket,
    //     name: "Boss Cat Rocket Club",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: mallard,
    //     name: "The Mallard Order",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: oremob,
    //     name: "Oremob",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: pavia,
    //     name: "Pavia",
    //     floor_price: 100,
    //     percentage: 79.3,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: DEADPXLZ,
    //     name: "DEADPXLZ",
    //     floor_price: 100,
    //     percentage: 0,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: yummi,
    //     name: "Yummi Universe",
    //     floor_price: 100,
    //     percentage: -16.1,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: space_bud,
    //     name: "Space Budz",
    //     floor_price: 100,
    //     percentage: 10.98,
    //     volume: 6632.23,
    //   },
    //   {
    //     image: magic_kong,
    //     name: "Magic Kongs",
    //     floor_price: 100,
    //     percentage: -36.41,
    //     volume: 6632.23,
    //   },
    // ];
    
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
            />
          ))}
        </div>
      </div>
    );
};

export default TopCollections;