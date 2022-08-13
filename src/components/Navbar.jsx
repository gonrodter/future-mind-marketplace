import { FiGithub } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import FMlogo from "../assets/secondary_blue_logo.png";

const Navbar = () => {
  return (
    <nav className="flex fixed w-full justify-between items-center shadow-md h-20 font-body bg-white z-50">
      <div className="flex items-center ml-12">
        <img className=" w-10 h-10 mr-2" src={FMlogo} alt="FMLogo" />
        <h4 className=" text-secondary-blue uppercase tracking-widest text-2xl font-semibold">
          Future Mind
        </h4>
      </div>
      <ul className="flex">
        <div className="flex font-normal">
          <li className="pr-8">
            <a
              className=" block text-primary-blue no-underline tracking-wider text-lg"
              href="#explore"
            >
              Marketplace
            </a>
          </li>
          <li className="pr-8">
            <a
              className=" text-primary-blue no-underline tracking-wider text-lg"
              href="#contactme"
            >
              FutureMind
            </a>
          </li>
          <li className="pr-8">
            <a
              className=" text-primary-blue no-underline tracking-wider text-lg"
              href="#aboutme"
            >
              About
            </a>
          </li>
        </div>
        <div className="flex font-normal pr-8">
          <li className="pr-8">
            <a
              className=" text-primary-blue no-underline tracking-wider text-lg inline-block align-middle"
              href="#"
            >
              <FaRegUser />
            </a>
          </li>
          <li className="pr-8">
            <a
              className=" text-primary-blue no-underline tracking-wider text-lg text-lg inline-block align-middle"
              href="#"
            >
              <BiWalletAlt />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
