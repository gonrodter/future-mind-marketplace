import React from 'react';

const MarketplaceSearchBar = ({ search, setSearch }) => {
    return (
      <div className="flex justify-center pt-32">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a collection"
          className="w-96 h-12 px-4 my-8 text-lg font-body text-secondary-blue border-2 border-primary-blue rounded-lg"
        />
      </div>
    );
};

export default MarketplaceSearchBar;