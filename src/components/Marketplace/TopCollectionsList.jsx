import React, { useState, useEffect } from "react";
import TopCollectionCard from "./TopCollectionCard";
import { fetchTopCollections } from "../../fetchers/collectionFetcher";
import Spinner from "../Reutilized/Spinner";

const TopCollectionsList = () => {
  const [loading, setLoading] = useState(true);

  const [topCollections, setTopCollections] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await Promise.all([fetchTopCollections()]).then(
          ([topCollections]) => {
            setTopCollections(topCollections);
          }
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14 my-20 font-body justify-items-center">
      {topCollections
        .filter(
          (collection) =>
            collection.contracts && collection.contracts.length > 0
        )
        .map((collection) => (
          <TopCollectionCard collection={collection} key={collection.id} />
        ))}
    </div>
  );
};

export default TopCollectionsList;
