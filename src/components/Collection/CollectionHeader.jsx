import React from "react";
import CollectionInfoHeader from "./CollectionInfoHeader";

const CollectionHeader = (props) => {
  return (
    <div>
      <div className="h-80 w-full">
        <img
          className="w-full h-full object-cover border-b shadow-lg"
          src={props.bannerImage}
        />
      </div>
      <div className="px-8 sm:px-12">
        <img
          className="absolute top-44 left-1/2 transform -translate-x-1/2 lg:transform-none lg:left-12 rounded-full w-72 border-2 lg:mx-0 bg-white"
          src={props.image}
        />
        <div className="md:px-12 lg:px-0 pt-32 text-justify lg:text-left">
          <p className="text-3xl text-secondary-blue font-semibold text-center  lg:text-left">
            {props.name}
          </p>
          <p className="text-md text-primary-lighter-blue mt-4">
            {props.description}
          </p>
        </div>
        <div className="flex gap-x-4 sm:gap-x-8 pt-10 md:px-12 lg:px-0">
          <CollectionInfoHeader number={props.items} infoType="Items" />
          <CollectionInfoHeader number={props.num_owners} infoType="Owners" />
          <CollectionInfoHeader
            number={props.total_volume}
            infoType="Total Volume"
          />
          <CollectionInfoHeader
            number={props.floor_price == null ? "-" : props.floor_price }
            infoType="Floor Price"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
