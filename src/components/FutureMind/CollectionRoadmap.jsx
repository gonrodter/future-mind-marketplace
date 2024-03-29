import { FaFlagCheckered } from "react-icons/fa";
import finish_line from "../../assets/finish_line.png";
import React from "react";

const CollectionRoadmap = () => {
  return (
    <div className="h-full mt-14 mb-20 px-12 font-body">
      <div className="">
        <p className="flex justify-center items-center text-xl uppercase text-secondary-blue font-bold mb-4">
          Our Goals
          <span className="pl-1">
            <FaFlagCheckered />
          </span>
        </p>
        <p className="text-4xl text-center uppercase text-secondary-blue font-extrabold">
          Roadmap
        </p>
      </div>
      <div className="mt-4">
        <img className="h-6 w-full" src={finish_line} alt="finish_line" />
      </div>
      <div className="grid md:grid-cols-2 justify-center gap-20 1.5xl:flex 1.5xl:gap-10 1.5xl:px-12 mt-10 px-10 xl:px-32">
        <div className="m-auto">
          <p className="text-primary-blue text-xl font-bold">Phase 01</p>
          <p className="text-primary-blue text-2xl font-bold">20% Soldout</p>
          <p className="text-primary-lighter-blue text-lg w-72 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur dicta odit dolores debitis. Laboriosam at tenetur amet.
          </p>
        </div>
        <div className="m-auto">
          <p className="text-primary-blue text-xl font-bold">Phase 02</p>
          <p className="text-primary-blue text-2xl font-bold">50% Soldout</p>
          <p className="text-primary-lighter-blue text-lg w-72 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur dicta odit dolores debitis. Laboriosam at tenetur amet.
          </p>
        </div>
        <div className="m-auto">
          <p className="text-primary-blue text-xl font-bold">Phase 03</p>
          <p className="text-primary-blue text-2xl font-bold">
            Metaverse Launch
          </p>
          <p className="text-primary-lighter-blue text-lg w-72 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur dicta odit dolores debitis. Laboriosam at tenetur amet.
          </p>
        </div>
        <div className="m-auto">
          <p className="text-primary-blue text-xl font-bold">Phase 04</p>
          <p className="text-primary-blue text-2xl font-bold">70% Soldout</p>
          <p className="text-primary-lighter-blue text-lg w-72 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur dicta odit dolores debitis. Laboriosam at tenetur amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionRoadmap;
