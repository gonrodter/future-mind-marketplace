import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import { RiTeamLine } from "react-icons/ri";

const CollectionTeam = () => {
  return (
    <div className="font-body h-full linear-bg px-60 pb-20">
      <div className="pt-16">
        <p className="flex items-center text-xl uppercase text-secondary-blue font-bold mb-4">
          Team Members <span className="pl-1"><RiTeamLine /></span>
        </p>
        <p className="text-4xl uppercase text-secondary-blue font-extrabold">
          Meet the crew
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-16 py-10">
        <div className="glass p-16">
          <img
            className="h-28 block ml-auto mr-auto"
            src={avatar}
            alt="nft"
          ></img>
          <p className="pt-4 text-xl text-primary-blue font-bold text-center">
            Terr0nz
          </p>
          <p className="text-md text-primary-blue font-semibold text-center w-40">
            Founder and CEO
          </p>
        </div>
        <div className="glass p-16">
          <img
            className="h-28 block ml-auto mr-auto"
            src={avatar2}
            alt="nft"
          ></img>
          <p className="pt-4 text-xl text-primary-blue font-bold text-center">
            Beth
          </p>
          <p className="text-md text-primary-blue font-semibold text-center w-40">
            Artist
          </p>
        </div>
        <div className="glass p-16">
          <img
            className="h-28 block ml-auto mr-auto"
            src={avatar3}
            alt="nft"
          ></img>
          <p className="pt-4 text-xl text-primary-blue font-bold text-center">
            TomRem
          </p>
          <p className="text-md text-primary-blue font-semibold text-center w-40">
            Blockchain Dev
          </p>
        </div>
        <div className="glass p-16">
          <img
            className="h-28 block ml-auto mr-auto"
            src={avatar4}
            alt="nft"
          ></img>
          <p className="pt-4 text-xl text-primary-blue font-bold text-center">
            $Luci
          </p>
          <p className="text-md text-primary-blue font-semibold text-center w-40">
            SEO Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionTeam;
