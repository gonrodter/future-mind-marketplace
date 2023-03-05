import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import FMlogo from "../../assets/secondary_blue_logo.png";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <nav className="flex fixed w-full justify-between items-center shadow-md h-16 md:h-20 font-body bg-white z-50 pl-12 md:px-12">
      <div className="flex items-center">
        <img
          className="w-8 h-8 md:w-10 md:h-10 mr-2"
          src={FMlogo}
          alt="FMLogo"
        />
        <Link
          className=" text-secondary-blue uppercase tracking-widest text-xl md:text-2xl font-semibold"
          to="/"
        >
          Future Mind
        </Link>
      </div>
      <ul className="hidden md:flex">
        <div className="flex gap-5 lg:gap-8 font-normal">
          <li className="">
            <Link
              className=" block text-primary-blue no-underline tracking-wider text-base md:text-lg"
              to="/marketplace"
            >
              Marketplace
            </Link>
          </li>
          <li className="">
            <Link
              className=" text-primary-blue no-underline tracking-wider text-base md:text-lg"
              to="/futuremind"
            >
              FutureMind
            </Link>
          </li>
          <li className="pr-8">
            <Link
              className=" text-primary-blue no-underline tracking-wider text-base md:text-lg"
              to="/"
            >
              About
            </Link>
          </li>
        </div>
        <div className="flex font-normal">
          <li className="pr-8">
            {isConnected ? (
              <Link
                className=" text-primary-blue no-underline inline-block align-middle"
                to="/mywallet"
              >
                <FaRegUser />
              </Link>
            ) : (
              <a className=" text-primary-blue no-underline inline-block align-middle">
                <FaRegUser />
              </a>
            )}
          </li>
          <li className="">
            {isConnected ? (
              <p className="text-primary-blue no-underline tracking-wider text-base md:text-md lg:text-lg inline-block align-middle border-2 border-secondary-blue px-2 rounded-lg">
                Connected
              </p>
            ) : (
              <button
                onClick={connectAccount}
                className=" text-primary-blue no-underline tracking-wider text-lg inline-block align-middle"
              >
                <BiWalletAlt />
              </button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
