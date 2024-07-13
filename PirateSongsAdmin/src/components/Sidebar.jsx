import React from "react";
import { assets } from "../assets/assets";
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="bg-black min-h-screen pl-[2vw]">
      <div className="flex p-3 items-center">
        <img className="w-20" src={assets.officialLogo} alt="" />
        <h3 className="text-white text-[2vw]">Pirate Songs</h3>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <NavLink to="/add-song" className="flex items-center gap-2.5 p-2 text-gray-800 bg-white border border-white">
          <img className="w-9" src={assets.add_song} alt="" />
          <p className="hidden sm:block">Add Song</p>
        </NavLink>
        <NavLink to="/list-song" className="flex items-center gap-2.5 p-2 text-gray-800 bg-white border border-white">
          <img className="w-7" src={assets.song_icon} alt="" />
          <p className="hidden sm:block">List Songs</p>
        </NavLink>
        <NavLink to="/add-album" className="flex items-center gap-2.5 p-2 text-gray-800 bg-white border border-white">
          <img className="w-7" src={assets.add_album} alt="" />
          <p className="hidden sm:block">Add Album</p>
        </NavLink>
        <NavLink to="/list-album" className="flex items-center gap-2.5 p-2 text-gray-800 bg-white border border-white">
          <img className="w-9" src={assets.album_icon} alt="" />
          <p className="hidden sm:block">List Albums</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
