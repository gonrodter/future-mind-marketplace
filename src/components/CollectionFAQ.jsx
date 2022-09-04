import { RiQuestionAnswerLine } from "react-icons/ri";
import Question from "./Question";

const CollectionFAQ = () => {
    
  return (
    <div className="font-body h-full px-60 pb-20">
      <div className="pt-16 text-center">
        <p className="flex items-center justify-center text-xl uppercase text-secondary-blue font-bold mb-4">
          Questions & Answers <span className="pl-1"><RiQuestionAnswerLine /></span>
        </p>
        <p className="text-4xl uppercase text-secondary-blue font-extrabold">
          Frequently Asked Questions
        </p>
      </div>
      <Question question="When? How much? How Many?" answer="31st of August. 0.02 ETH. 50 NFTs in total" />
    </div>
  );
};

export default CollectionFAQ;
