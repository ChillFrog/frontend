import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
