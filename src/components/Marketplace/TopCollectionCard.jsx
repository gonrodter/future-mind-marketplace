import React, { useState, useEffect } from 'react';
import defaultImg from "../../assets/default-image.png";
import { Link } from "react-router-dom";
import { fetchCollectionStats } from "../../fetchers/collectionFetcher";
import Spinner from "../Reutilized/Spinner";
import { FaEthereum } from "react-icons/fa";

const TopCollectionCard = ({ collection }) => {

    const [volume, setVolume] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          await Promise.all([fetchCollectionStats(collection.collection, false)]).then(
            ([collectionStats]) => {
              setVolume(collectionStats.volume);
            }
          );
        } finally {

        }
      };

      fetchData();
    }, []);

    return (
      <div className="w-72 rounded-md shadow-xl border-2">
        <Link
          to="/collection"
          state={{
            testnet: false,
            contract: collection.contracts[0].address,
            slug: collection.collection,
          }}
        >
          <img
            className="rounded-t-md w-72 h-72 bg-cover"
            src={collection.image_url ? collection.image_url : defaultImg}
          />
          <div>
            <p className="text-xl text-primary-blue font-semibold px-4 pt-4 pb-2 truncate">
              {collection.name}
            </p>
            <p className="text-base flex items-center text-primary-lighter-blue pl-4 pb-2">
              {Number(volume).toFixed(2)}
              <span className="text-secondary-blue pl-2">
                <FaEthereum />
              </span>
            </p>
          </div>
        </Link>
      </div>
    );
};

export default TopCollectionCard;