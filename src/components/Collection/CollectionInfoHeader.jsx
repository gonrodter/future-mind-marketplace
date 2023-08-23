import React from "react";
import { FaEthereum } from "react-icons/fa";

const CollectionInfoHeader = (props) => {
  return (
    <div>
      <p className="flex items-center text-primary-blue font-bold text-xl">
        {props.infoType === "Floor Price" ? (
          <>
            {props.number}
            <FaEthereum />
          </>
        ) : (
          props.number
        )}
      </p>
      <p className="text-primary-lighter-blue">{props.infoType}</p>
    </div>
  );
};

export default CollectionInfoHeader;