import React from "react";

const Property = ({ type, name, percentage }) => {
    return (
      <div className="bg-primary-blue text-white w-auto text-sm p-3 rounded-md text-center">
        <p className="truncate">{type}</p>
        <p className="font-bold truncate">{name}</p>
        <p className="truncate">{percentage}%</p>
      </div>
    );
}

export default Property;