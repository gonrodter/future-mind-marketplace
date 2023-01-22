import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { fetchCollections } from "../../fetchers/collections";
import React from "react";

const TopCollections = () => {

    const { isError, isSuccess, isLoading, data, error } = useQuery(
        ["collections"],
        fetchCollections,
        { staleTime: 60000 }
    );

    if (isLoading) {
        console.log("Loading...");
        return <div>Loading...</div>;
    }

    if (isError) {
      console.log("Error: ", error);
      return <div>Error...</div>;
    }

    return(
        <div>

        </div>
    );
};

export default TopCollections;