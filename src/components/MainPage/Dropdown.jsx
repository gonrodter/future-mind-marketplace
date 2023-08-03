import React from "react";
import { useState } from "react";

const Dropdown = ({ onTimeFilterChange }) => {
  const [value, setValue] = useState("24h");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    onTimeFilterChange(selectedValue);
  };

  return (
    <div className="pl-1">
      <select
        className="outline-none"
        value={value}
        onChange={handleChange}
        style={{ boxSizing: "border-box" }}
      >
        <option className="text-base" value="24h">
          24 hours
        </option>
        <option className="text-base" value="7d">
          7 days
        </option>
        <option className="text-base" value="30d">
          30 days
        </option>
        <option className="text-base" value="all">
          All time
        </option>
      </select>
    </div>
  );
};

export default Dropdown;