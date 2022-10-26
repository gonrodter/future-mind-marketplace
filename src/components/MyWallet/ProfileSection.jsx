import { ethers } from "ethers";
import { useState } from "react";

const ProfileSection = () => {

  const [address, setAddress] = useState();

  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => setAddress(res[0]));
  }
  console.log(address);
  return (
    <div className="py-32 ">
      <div>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
