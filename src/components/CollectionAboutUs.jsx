import { MdHistoryEdu } from "react-icons/md";
import multi from "../assets/multi.png";
import dollar from "../assets/dollarcoin.png";
import city from "../assets/city.png";
import controller from "../assets/controller.png";

const CollectionAboutUs = () => {
    return (
      <div className="font-body h-screen">
        <div className="flex items-center mt-40">
          <div className="w-1/2 mr-28">
            <img className="float-right" src={multi} alt="nft" />
          </div>
          <div className="w-1/2">
            <p className="flex items-center text-xl uppercase text-secondary-blue font-bold mb-4">
              The Story <span className="pl-1"><MdHistoryEdu /></span>
            </p>
            <p className="text-4xl uppercase text-secondary-blue font-extrabold">
              About Us
            </p>
            <p className="text-xl text-primary-blue mt-10 pr-80">
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
        <div className="flex justify-around mt-32 mx-56">
          <div className="glass p-8">
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
          <div className="glass p-8">
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
          <div className="glass p-8">
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