import React from 'react';

const MarketplaceSearchBar = ({ search, setSearch }) => {
    let numNfts = 0;

    const handleInputChange = (e) => {
      setSearch(e.target.value);
    };
    return (
      <div className="flex justify-center pt-24">
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a collection"
          className="w-72 h-12 px-4 my-8 text-lg font-body text-secondary-blue border-2 border-primary-blue rounded-lg"
        />
      </div>
    );
};

export default MarketplaceSearchBar;