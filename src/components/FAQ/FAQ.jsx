import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import line from "../../assets/line_faq.png";
import magnifier from "../../assets/magnifier.png";
import dollar_icon from "../../assets/dollar_icon.png";
import rocket_icon from "../../assets/rocket_icon.png";
import wallet_icon_faq from "../../assets/wallet_icon_faq.png";
import FAQSearchBar from "./FAQSearchBar";
import FAQCard from "./FAQCard";
import Question from "../Reutilized/Question";
import { Link } from "react-router-dom";

const FAQ = () => {
    return (
      <div className="font-body">
        <div className="pt-36 pb-16 bg-gray-100">
          <div className="flex items-center gap-6 md:gap-10 justify-center mx-12">
            <img
              className="w-20 h-20 md:w-24 md:h-24"
              src={magnifier}
              alt="magnifier"
            />
            <img className="h-24 w-1 md:h-32" src={line} alt="line" />
            <p className="text-primary-blue text-lg md:text-2xl font-semibold">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </p>
          </div>
          {/* <div className="pt-8 mx-12">
            <FAQSearchBar />
          </div> */}
        </div>
        <div className="flex flex-wrap gap-x-20 gap-y-14 justify-center xl:justify-center xl:gap-28 my-20 px-12">
          <Link to="/faq/getting-started">
            <FAQCard image={rocket_icon} text="Getting Started" />
          </Link>
          <Link to="/faq/buying">
            <FAQCard image={wallet_icon_faq} text="Buying" />
          </Link>
          <Link to="/faq/selling">
            <FAQCard image={dollar_icon} text="Selling" />
          </Link>
        </div>
        <div className="px-12 md:px-36 lg:px-52 2xl:px-60  pb-20">
          <Question
            question="What is an NFT?"
            answer="NFT stands for 'non-fungible token'. Non-fungible means that something is unique and can't be replaced. By contrast, physical money and cryptocurrencies are fungible, which means they can be traded or exchanged for one another. Every NFT contains a digital signature which makes each one unique."
          />
          <Question
            question="What is a Smart Contract?"
            answer="A smart contract is an agreement between two people or entities in the form of computer code programmed to execute automatically."
          />
          <Question
            question="What is minting?"
            answer="Minting refers to the creation of new crypto coins in the form of rewards for validators for confirmation of transaction blocks, data authentication and recording new transaction blocks on the blockchain."
          />
          <Question
            question="How do I buy ETH?"
            answer="The easiest way to buy Ethereum is via exchange. "
          />
          <Question
            question="What is a floor price?"
            answer="Floor price is the lowest price for collection items, rather than the average item price, and is updated in real-time. Dutch auctions are not included in floor price calculations."
          />
          <Question
            question="How do I transfer my ETH to my wallet?"
            answer="Enter the amount of Ethereum you'd like to transfer, introduce your wallet address, and click on 'Transfer'."
          />
          <Question
            question="What is a blockchain?"
            answer="A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network."
          />
        </div>
      </div>
    );
}

export default FAQ;