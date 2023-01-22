import { RiQuestionAnswerLine } from "react-icons/ri";
import Question from "../Reutilized/Question";
import React from "react";

const CollectionFAQ = () => {
    
  return (
    <div className="font-body h-full px-60 pb-20">
      <div className="pt-16 pb-10 text-center">
        <p className="flex items-center justify-center text-xl uppercase text-secondary-blue font-bold mb-4">
          Questions & Answers{" "}
          <span className="pl-1">
            <RiQuestionAnswerLine />
          </span>
        </p>
        <p className="text-4xl uppercase text-secondary-blue font-extrabold">
          Frequently Asked Questions
        </p>
      </div>
      <Question
        question="When? How much? How Many?"
        answer="31st of August. 0.02 ETH. 50 NFTs in total"
      />
      <Question
        question="What Blockchain will this be minted on?"
        answer="We will be launching on the Ethereum blockchain."
      />
      <Question
        question="Which wallet can we mint form?"
        answer="You can mint from any Ethereum supported wallets such as MetaMask. Please ensure you are not minting from an exchange wallet!"
      />
      <Question
        question="Do we own the licensing for our NFTs?"
        answer="By being a holder of a Robopunks NFT, you will have full commercial rights to that NFT."
      />
      <Question
        question="Will there be any whitelist?"
        answer="No, we would like to keep this as organic as possible, so everyone can have the same opportunity to get an NFT."
      />
    </div>
  );
};

export default CollectionFAQ;
