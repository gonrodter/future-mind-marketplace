import React from "react";
import platinumKong from "../../assets/platinumKong.png";
import smartContract from "../../assets/smart-contract.png";
import ethereum from "../../assets/eth.jpg";

const FAQGettingStarted = () => {
    return (
      <div className="pt-32 pb-10 font-body mx-12">
        <div className="flex flex-col mx-auto max-w-6xl">
          <p className="text-center font-bold text-5xl text-secondary-blue">
            Getting Started
          </p>
          <div className="flex flex-col gap-6 mt-10">
            <p className="text-center font-semibold text-3xl text-secondary-blue lg:text-left">
              What is an NFT?
            </p>
            <div className="flex flex-col gap-6 mx-auto max-w-xl lg:items-start lg:flex-row lg:gap-16 lg:max-w-full">
              <img className="rounded-3xl w-full lg:w-2/5" src={platinumKong} />
              <div className="text-lg text-primary-blue">
                <span>
                  NFT stands for Non-Fungible Token. It is a type of digital
                  asset that represents ownership or proof of authenticity of a
                  unique item or piece of content using blockchain technology.
                  Unlike cryptocurrencies such as Bitcoin or Ethereum, which are
                  fungible and can be exchanged on a one-to-one basis, NFTs are
                  unique and cannot be exchanged on a like-for-like basis.
                </span>
                <br />
                <br />
                <span>
                  NFTs are typically used to represent digital or digitized
                  assets, such as digital art, music, videos, virtual real
                  estate, and other forms of digital content. Each NFT is stored
                  on a blockchain, which is a decentralized and transparent
                  digital ledger. The blockchain ensures the authenticity,
                  scarcity, and ownership of the digital asset by recording and
                  verifying its transaction history.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-center font-semibold text-3xl text-secondary-blue mt-10 lg:text-right">
              What is a Smart Contract?
            </p>
            <div className="flex flex-col gap-6 mx-auto max-w-xl lg:items-start lg:flex-row lg:gap-16 lg:max-w-full">
              <div className="text-lg text-primary-blue">
                <span>
                  A smart contract is a self-executing contract with the terms
                  of the agreement directly written into code. It operates on a
                  blockchain, a decentralized and transparent digital ledger.
                  The code of the smart contract defines the rules and
                  conditions of the agreement, and it automatically executes and
                  enforces those terms when predefined conditions are met.
                </span>
                <br />
                <br />
                <span>
                  Smart contracts are typically built on blockchain platforms
                  that support them, such as Ethereum, Binance Smart Chain, or
                  others. These contracts can be used to automate various
                  processes and transactions, eliminating the need for
                  intermediaries and increasing the efficiency and transparency
                  of the agreement.
                </span>
              </div>
              <img
                className="rounded-3xl w-full lg:w-2/5"
                src={smartContract}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-center font-semibold text-3xl text-secondary-blue mt-10 lg:text-left">
              How do I buy ETH?
            </p>
            <div className="flex flex-col gap-6 mx-auto max-w-xl lg:items-start lg:flex-row lg:gap-16 lg:max-w-full">
              <img className="rounded-3xl w-full lg:w-2/5" src={ethereum} />
              <div className="text-lg text-primary-blue">
                <span>
                  To buy Ethereum (ETH), you can follow these general steps:
                </span>
                <br />
                <br />
                <span>
                  Choose a Cryptocurrency Exchange: Select a reputable
                  cryptocurrency exchange that supports Ethereum. Some popular
                  exchanges include Coinbase, Binance, Kraken, and others.
                </span>
                <br />
                <br />
                <span>
                  Create an Account: Sign up for an account on the chosen
                  exchange. This usually involves providing your email address,
                  creating a password, and completing any required identity
                  verification processes.
                </span>
                <br />
                <br />
                <span>
                  Deposit Funds: Deposit funds into your exchange account using
                  a bank transfer, credit/debit card, or other supported payment
                  methods.
                </span>
                <br />
                <br />
                <span>
                  Buy Ethereum (ETH): Once your account is funded, navigate to
                  the trading section of the exchange and locate the Ethereum
                  market. Specify the amount of Ethereum you want to buy and
                  complete the purchase.
                </span>
                <br />
                <br />
                <span>
                  Secure Storage: After buying Ethereum, consider transferring
                  it to a secure wallet for long-term storage. You can use
                  hardware wallets, software wallets, or other options depending
                  on your preferences and security needs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FAQGettingStarted;