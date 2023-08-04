import React from "react";

const CollectionHeader = (props) => {
  return (
    <div className="relative mb-52">
      <div className="h-80 w-full">
        <img className="w-full h-full object-cover" src={props.bannerImage} />
      </div>
      <div className="absolute top-32 w-full lg:left-10 px-12">
        <img className="rounded-full w-72 mx-auto lg:mx-0" src={props.image} />
        <div className="px-12 lg:pr-32 text-justify lg:text-left">
          <p className="text-xl text-primary-blue font-semibold text-center  lg:text-left">
            {props.name}
          </p>
          <p className="text-sm text-primary-lighter-blue mt-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
