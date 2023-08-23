import React from "react";
import { FaEthereum } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TopCollections = (props) => {

  return (
    <div className="font-body flex items-center">
      <p
        className={`${
          props.index + 1 === 1
            ? "mr-6"
            : props.index + 1 === 10 || props.index + 1 === 12
            ? "mr-2"
            : props.index + 1 === 11
            ? "mr-3"
            : "mr-4"
        } text-2xl text-primary-blue font-semibold`}
      >
        {props.index + 1}
      </p>
      <div className="w-14 h-10">
        <Link
          to="/collection"
          state={{
            contract: props.contract,
            slug: props.slug,
            floor_price: props.floor_price,
          }}
        >
          <img
            className="rounded-full align-middle"
            src={props.image}
            alt="collectionImg"
          />
        </Link>
      </div>
      <div className="text-primary-blue ml-3 w-full">
        <div className="flex items-center justify-between">
          {/* <Link to={`/collection?contract=${contract}`}> */}
          <Link
            to="/collection"
            state={{
              contract: props.contract,
              slug: props.slug,
              floor_price: props.floor_price,
            }}
          >
            <p className="text-lg font-semibold">{props.name}</p>
          </Link>
          <p
            className={`${
              props.percentage > 0
                ? "text-green-300"
                : props.percentage === 0 || props.percentage == 0.0
                ? "text-primary-blue"
                : "text-red-500"
            }  text-sm font-semibold`}
          >
            {props.percentage}%
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm flex items-center">
            Floor price:
            <span className="text-secondary-blue pl-2">
              <FaEthereum />
            </span>
            {props.floor_price}
          </p>
          <p className="text-sm flex items-center font-semibold">
            <span className="text-secondary-blue pr-1">
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