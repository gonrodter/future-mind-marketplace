import { MdHistoryEdu } from "react-icons/md";
import multi from "../../assets/multi.png";
import dollar from "../../assets/dollarcoin.png";
import city from "../../assets/city.png";
import controller from "../../assets/controller.png";
import React from "react";

const CollectionAboutUs = () => {
    return (
      <div className="font-body h-full pb-10 px-12">
        <div className="flex gap-10 md:gap-16 items-center mt-40">
          <div className="hidden md:block md:w-1/2">
            <img className="float-right" src={multi} alt="nft" />
          </div>
          <div className="md:w-1/2">
            <p className="flex items-center text-xl justify-center md:justify-start uppercase text-secondary-blue font-bold mb-4">
              The Story
              <span className="pl-1">
                <MdHistoryEdu />
              </span>
            </p>
            <p className="text-4xl text-center md:text-left uppercase text-secondary-blue font-extrabold">
              About Us
            </p>
            <p className="text-base lg:text-xl text-primary-blue mt-10 text-center md:text-left lg:w-450px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              expedita, pariatur ab facilis commodi, eligendi et sapiente sit,
              rerum odio hic earum voluptatum? Magni cumque atque possimus nobis
              maxime voluptas.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              unde, qui quaerat molestias consequatur ea quo odit earum soluta
              ullam optio assumenda dolores rerum, eius excepturi quisquam modi
              odio. Laudantium!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-16 xl:flex mt-16 xl:mt-32">
          <div className="glass p-8 mx-auto">
            <div className="flex items-center">
              <img className="w-10 mr-2" src={controller} alt="controller" />
              <p className="text-2xl text-primary-blue uppercase font-bold">
                Gaming NFTS
              </p>
            </div>
            <p className="mt-4 text-md text-primary-lighter-blue font-semibold w-72">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur nihil laborum tenetur cumque.
            </p>
          </div>
          <div className="glass p-8 mx-auto">
            <div className="flex items-center">
              <img className="w-10 mr-2" src={dollar} alt="dollar" />
              <p className="text-2xl text-primary-blue uppercase font-bold">
                Play 2 Earn
              </p>
            </div>
            <p className="mt-4 text-md text-primary-lighter-blue font-semibold w-72">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur nihil laborum tenetur cumque.
            </p>
          </div>
          <div className="glass p-8 mx-auto col-span-full">
            <div className="flex items-center">
              <img className="w-10 mr-2" src={city} alt="city" />
              <p className="text-2xl text-primary-blue uppercase font-bold">
                Metaverse
              </p>
            </div>
            <p className="mt-4 text-md text-primary-lighter-blue font-semibold w-72">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur nihil laborum tenetur cumque.
            </p>
          </div>
        </div>
      </div>
    );
}

export default CollectionAboutUs;