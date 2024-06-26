import White_logo from "../../assets/whitelogo.png";
import Twitter from "../../assets/twitter.png";
import Discord from "../../assets/discord.png";
import Line from "../../assets/line.png";
import Big_line from "../../assets/big_line.png";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary-blue font-body px-12 py-8 md:pr-8 lg:px-24">
      <div className="md:float-left ">
        <div className="flex justify-center md:justify-start items-center">
          <img className="h-12 w-12" src={White_logo} alt="whitelogo" />
          <p className=" pl-2 text-white text-xl font-semibold uppercase">
            Future Mind
          </p>
        </div>
        <div>
          <p className="text-white text-center md:text-left mt-4 md:w-80">
            We are a marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, sell, and find exclusive digital items. Also, discover
            our incredible art collection.
          </p>
        </div>
        <div className="flex justify-center md:justify-start my-4">
          <a href="#">
            <img className="h-6 w-6 mr-2" src={Twitter} alt="Twitter" />
          </a>
          <img className="h-6" src={Line} alt="line" />
          <a href="#">
            <img className="h-6 w-6 ml-2" src={Discord} alt="Discord" />
          </a>
        </div>
      </div>
      <div className="grid gap-16 text-center grid-cols-autofit sm:grid-cols-3 my-8 md:my-0 md:text-left md:flex md:justify-end md:gap-8 lg:gap-16 xl:gap-28 text-white">
        <ul>
          <li className="mb-4 font-semibold">
            <a href="">Browse</a>
          </li>
          <li className="mb-2">
            <a href="/marketplace">Marketplace</a>
          </li>
          <li className="mb-2">
            <a href="/marketplace">Collections</a>
          </li>
          <li className="mb-2">
            <a href="/">Rankings</a>
          </li>
          <li>
            <Link to="/futuremind">Future Mind</Link>
          </li>
        </ul>
        <ul>
          <li className="mb-4 font-semibold">
            <a href="">My Account</a>
          </li>
          <li className="mb-2">
            <a href="/mywallet">Profile</a>
          </li>
          <li className="mb-2">
            <a href="">Favorites</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
        <ul className="col-span-full xs:col-span-1">
          <li className="mb-4 font-semibold ">
            <a href="">About</a>
          </li>
          <li className="mb-2">
            <a href="/about-us">Us</a>
          </li>
          <li className="mb-2">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="mb-2">
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center w-full">
        <img className="w-full" src={Big_line} alt="Big_line" />
      </div>
      <div>
        <p className="text-left text-xs text-white mt-2">© 2024 Future Mind</p>
      </div>
    </div>
  );
};

export default Footer;
