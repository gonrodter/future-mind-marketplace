import React from "react";
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

const TopCollections = () => {
    const data = [
      {
        image: gangsta_ck,
        name: "Chilled Kong",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: moustache_cyberpunk,
        name: "Tiger Society",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: ape_society,
        name: "The Ape Society",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: clay_nation,
        name: "Clay Nation",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: boss_rocket,
        name: "Boss Cat Rocket Club",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: mallard,
        name: "The Mallard Order",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: oremob,
        name: "Oremob",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: pavia,
        name: "Pavia",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: DEADPXLZ,
        name: "DEADPXLZ",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
      {
        image: yummi,
        name: "Yummi Universe",
        floor_price: 100,
        percentage: 79.3,
        volume: 6632.23,
      },
    ];
    return (
      <div className="font-body pb-32">
        <p className="text-center text-2xl font-semibold text-primary-blue">
          Top collections: <span>24 hours</span>
        </p>
        <div className="grid w-350px xs:w-400px 1.5md:grid-flow-col grid-cols-1 1.5md:grid-cols-2 1.5md:grid-rows-5 justify-center items-center px-0 1.5md:px-12 pt-10 gap-y-4 1.5md:gap-x-10 1.25lg:gap-x-20 1.5md:w-900px mx-auto">
          {data.map((d) => (
            <TopCollection
              index={data.indexOf(d)}
              image={d.image}
              name={d.name}
              floor_price={d.floor_price}
              percentage={d.percentage}
              volume={d.volume}
            />
          ))}
        </div>
      </div>
    );
};

export default TopCollections;