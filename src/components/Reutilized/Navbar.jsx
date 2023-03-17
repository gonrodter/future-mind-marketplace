import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import FMlogo from "../../assets/secondary_blue_logo.png";

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
        <ul className={`${isNavOpen ? "block" : "hidden"} pt-10 md:pt-0 md:flex`}>
          <div className="md:flex gap-5 lg:gap-8 text-right md:text-center text-primary-blue no-underline text-base md:text-lg tracking-wider font-normal">
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
            <li>
              {isConnected ? (
                <p className="md:text-md lg:text-lg inline-block align-middle border-2 border-secondary-blue px-2 rounded-lg">
                  Connected
                </p>
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
