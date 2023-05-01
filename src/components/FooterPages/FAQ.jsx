import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import line from "../../assets/line_faq.png";
import magnifier from "../../assets/magnifier.png";

const FAQ = () => {
    return (
      <div className="font-body">
        <div className="pt-32 pb-24 bg-gray-100">
          <div className="flex items-center gap-10 justify-center">
            <img className="w-24 h-24" src={magnifier} alt="line" />
            <img src={line} alt="line" />
            <p className="text-primary-blue text-2xl font-semibold">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </p>
          </div>
        </div>
      </div>
    );
}

export default FAQ;