import React from "react";

const FAQSearchBar = () => {
  return (
    <div className="w-264px md:w-2/5 md:max-w-lg m-auto border-primary-lighter-blue border-2 rounded-xl">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-xl text-secondary-blue font-body p-2 outline-none"
      />
    </div>
  );
};

export default FAQSearchBar;