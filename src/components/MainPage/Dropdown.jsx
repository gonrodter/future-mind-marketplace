import React from "react";
import { useState } from "react";

const Dropdown = () => {
  const [value, setValue] = useState("24 hours");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="pl-1">
      <select
        className="outline-none"
        value={value}
        onChange={handleChange}
        style={{ boxSizing: "border-box" }}
      >
        <option className="text-base" value="24 hours">
          24 hours
        </option>
        <option className="text-base" value="7 days">
          7 days
        </option>
        <option className="text-base" value="30 days">
          30 days
        </option>
        <option className="text-base" value="All time">
          All time
        </option>
      </select>
    </div>
  );
}

export default Dropdown;