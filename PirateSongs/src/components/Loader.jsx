// Loader.js
import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";

const Loader = ({ onExplore }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <Lottie className="w-52" animationData={loader} loop={true} />
      <button onClick={onExplore} className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-zinc-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 border-none outline-none">
        Listen 🎧
      </button>
    </div>
  );
};

export default Loader;
