import { ethers } from "ethers";
import React, { useState } from "react";
import SearchBar from "../MyWallet/SearchBar";

const ProfileSection = () => {

  const [address, setAddress] = useState();

  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => setAddress(res[0]));
  }
  return (
    <div className="pt-32 mx-10 xxs:mx-20">
      <SearchBar />
    </div>
  );
};

export default ProfileSection;
