import React from "react";

const SearchBar = ({ search, setSearch }) => {
    let numNfts = 0;

     const handleInputChange = (e) => {
       setSearch(e.target.value);
     };
     
    return (
      <div className="flex justify-center xxs:justify-start w-full border-primary-blue border-2 rounded-xl px-2 xxs:px-10 py-6">
        <input
          type="text"
          placeholder="Search NFTs"
          value={search}
          onChange={handleInputChange}
          className="text-secondary-blue font-body border-b-2 border-primary-blue  md:w-2/5 xl:w-1/3 outline-none focus:border-primary-lighter-blue focus:transition duration-500"
        />
        <p className="text-secondary-blue font-semibold ml-4">{numNfts} NFTs</p>
      </div>
    );
    };

export default SearchBar;
