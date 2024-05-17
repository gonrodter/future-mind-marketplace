import React from "react";

const CollectionNft = (props) => {
  return (
    <div className="w-64 rounded-xl shadow-xl border-2 overflow-hidden">
      <img className="rounded-t-md" src={props.image} />
      <div>
        <p className="text-xl text-primary-blue font-semibold px-4 pt-4 pb-4 -m-2">
          {props.id}
        </p>
        {/* <p className="text-base text-primary-lighter-blue pl-4 pb-2">
          {props.name}
        </p> */}
      </div>
    </div>
  );
};

export default CollectionNft;
