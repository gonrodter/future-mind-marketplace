import CK from "../../assets/CK_tie.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center font-body">
      <div className="h-full w-1/2 pl-72 pr-40">
        <p className=" text-6xl font-bold text-primary-blue">
          Discover, collect and sell NFts
        </p>
        <div className="mt-10 text-xl text-primary-lighter-blue">
          <p>
            Discover the art behind NFTs, support creators and join this amazing
            community
          </p>
        </div>
        <div className="mt-10">
          <button className="bg-secondary-blue text-white py-2 w-40 px-4 rounded-md font-semibold mr-16">
            Marketplace
          </button>
          <button className="bg-secondary-blue text-white py-2 w-40 px-4 rounded-md font-semibold">
            Collections
          </button>
        </div>
      </div>
      <div className="h-full w-1/2">
        <div className="absolute top-1/4 pl-40">
          <img className="block w-1/2 h-full rounded-t-md " src={CK} />
          <div className=" rounded-b-md shadow-xl w-1/2 border-2 border-t-0">
            <p className="text-2xl text-primary-blue font-semibold p-4">
              Chilled Kongs
            </p>
            <p className="text-base text-primary-lighter-blue pl-4 pb-4">
              Each one is unique, but they all have one thing in common: they
              are experts in enjoying the good things in life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
