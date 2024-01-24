import { ethers } from "ethers";
import React, { useState } from "react";
import SearchBar from "../MyWallet/SearchBar";
import { FaEthereum } from "react-icons/fa";
import { useAddress } from "../../contexts/AddressContext";


const ProfileSection = ({ search, setSearch }) => {
  const { address, setDynamicAddress } = useAddress();

  return (
    <div className="pt-32 mx-12 font-body">
      <div className="flex text-secondary-blue items-center mb-10">
        <FaEthereum />
        <p>{address}</p>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
};

export default ProfileSection;
