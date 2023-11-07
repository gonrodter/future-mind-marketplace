import { ethers } from "ethers";
import React, { useState } from "react";
import SearchBar from "../MyWallet/SearchBar";
import { FaEthereum } from "react-icons/fa";

const ProfileSection = () => {

  const [address, setAddress] = useState();

  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => setAddress(res[0]));
  }
  return (
    <div className="pt-32 mx-10 xxs:mx-20 font-body">
      <div className="flex text-secondary-blue items-center mb-10">
        <FaEthereum />
        <p>{address}</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default ProfileSection;
