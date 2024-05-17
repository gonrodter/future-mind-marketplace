import React from "react";
import FM from "../../assets/FMlogo.png";

const Spinner = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-12 w-12 absolute top-80"><img src={ FM } alt="" /></div>
      </div>
    );
}

export default Spinner;
