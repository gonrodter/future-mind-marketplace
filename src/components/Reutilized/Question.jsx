import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Question = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;

  return (
    <div className="text-primary-blue font-medium shadow rounded border border-gray-100 border-t-0 mt-6">
      <div className="text-primary-blue font-semibold p-3 text-lg relative">
        <div className="w-5/6">{question}</div>
        <button
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <BsChevronUp className="w-5" />
          ) : (
            <BsChevronDown className="w-5" />
          )}
        </button>
      </div>
      <div className={ansClass}>{answer}</div>
    </div>
  );
};

export default Question;
