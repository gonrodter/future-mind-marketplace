import React from "react";

const SearchBar = ({ search, setSearch }) => {
    let numNfts = 0;
    return (
      <div className="flex w-full border-primary-blue border-2 rounded-xl p-10">
        <input
          type="text"
          placeholder="Search NFTs"
          value={search}
          className="text-secondary-blue font-body border-b-2 border-primary-blue w-1/3 outline-none focus:border-primary-lighter-blue focus:transition duration-500"
        />
        <p className="text-secondary-blue font-semibold ml-4">{numNfts} NFTs</p>
      </div>
    );
    };

export default SearchBar;
