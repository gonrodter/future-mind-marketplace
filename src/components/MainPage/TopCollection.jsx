import React from "react";
import { FaEthereum } from "react-icons/fa";

const TopCollections = (props) => {
  return (
    <div className="font-body flex items-center">
      <p
        className={`${
          props.index + 1 === 1
            ? "mr-6"
            : props.index + 1 === 10
            ? "mr-2"
            : "mr-4"
        } text-2xl text-primary-blue font-semibold`}
      >
        {props.index + 1}
      </p>
      <div className="w-14 h-10">
        <img
          className="rounded-full align-middle"
          src={props.image}
          alt="collectionImg"
        />
      </div>
      <div className="text-primary-blue ml-3 w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-sm font-semibold">{props.percentage}%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm flex items-center">
            Floor price:
            <span className="text-secondary-blue pl-2">
              <FaEthereum />
            </span>
            {props.floor_price}
          </p>
          <p className="text-sm flex items-center font-semibold">
            <span className="text-secondary-blue pr-2">
              <FaEthereum />
            </span>
            {props.volume}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;