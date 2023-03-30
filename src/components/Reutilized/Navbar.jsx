import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import FMlogo from "../../assets/secondary_blue_logo.png";
import ciberpunk from "../../assets/moustache_cyberpunk.png";
import { ethers } from "ethers";

const Navbar = ({ accounts, setAccounts }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const { ethers } = require('ethers');

  const address = "0x2bd07b42757D5af6B6c40021E1F5319aF9e7Ccbf";
  const providerUrl = 'https://goerli.infura.io/v3/cc0055304e014896b8975f35fa1d2838';

  const [balance, setBalance] = useState(null);
  useEffect(() => {
    // Create a new instance of the ethers provider
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);

    // Call the getBalance method with the address and "latest" block number as arguments
    provider
      .getBalance(address, "latest")
      .then((balance) => {
        const etherBalance = ethers.utils.formatEther(balance);
        console.log(`The balance of address ${address} is ${etherBalance} ETH`);
        setBalance(Number(etherBalance).toFixed(2));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [address, providerUrl]);

  return (
    <nav
      className={`${
        isNavOpen ? "items-start" : "items-center"
      } flex fixed w-full h-auto py-4 justify-between md:items-center shadow-md md:h-20 font-body bg-white z-50 px-12`}
    >
      <div className="flex items-center pr-2">
        <img
          className="w-8 h-8 md:w-10 md:h-10 mr-2"
          src={FMlogo}
          alt="FMLogo"
        />
        <Link
          className="text-secondary-blue uppercase tracking-widest text-xl md:text-2xl font-semibold"
          to="/"
        >
          Future Mind
        </Link>
      </div>
      <div>
        <FiMenu
          className={`${isNavOpen ? "mt-1" : "mt-0"} md:hidden items-center
           text-secondary-blue h-6 w-6 cursor-pointer float-right`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        <ul
          className={`${isNavOpen ? "block" : "hidden"} pt-10 md:pt-0 md:flex`}
        >
          <div className="md:flex gap-5 lg:gap-8 text-right md:text-center items-center text-primary-blue no-underline text-base md:text-lg tracking-wider font-normal">
            <li>
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link to="/futuremind">FutureMind</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              {isConnected ? (
                <Link className="inline-block align-middle" to="/mywallet">
                  <FaRegUser />
                </Link>
              ) : (
                <a className="inline-block align-middle">
                  <FaRegUser />
                </a>
              )}
            </li>
            <li className="">
              {isConnected ? (
                <div className="md:text-md lg:text-lg flex items-center 1.5md:border-secondary-blue 1.5md:border-2 1.5md:px-4 1.5md:py-2 rounded-xl float-right">
                  <img
                    className="rounded-full w-8 1.5md:mr-2"
                    src={ciberpunk}
                    alt="profilePic"
                  />
                  <p className="hidden 1.5md:block align-middle">
                    {balance} ETH
                  </p>
                </div>
              ) : (
                <button
                  onClick={connectAccount}
                  className="text-lg inline-block align-middle"
                >
                  <BiWalletAlt />
                </button>
              )}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
