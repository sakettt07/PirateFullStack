import React, { useContext,useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    const navigate=useNavigate();
    const {theme,setTheme,themeChange}=useContext(PlayerContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleUserImageClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Add logout functionality here
        console.log("User logged out");
    };
  return (
    <>
    <div className="p-4 flex justify-between font-semibold items-center w-full">
      <div className="flex items-center gap-2 ">
        <img onClick={()=>navigate(-1)}
          className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
          src={assets.arrow_left}
          alt=""
        />
        <img onClick={()=>navigate(1)}
          className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
          src={assets.arrow_right}
          alt=""
        />
      </div>
      <div className="flex gap-1 items-center">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-black hover:text-white">
          Explore Premium
        </p>
        <p className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-white hover:text-black hover:border-black">
          Login
        </p>
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-black hover:text-white">
          SignUp
        </p>
        <div className="relative">
                        <img
                            onClick={handleUserImageClick}
                            className="object-cover w-10 h-10 rounded-full cursor-pointer"
                            src="https://companynewheroes.com/wp-content/blogs.dir/18/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683.jpg"
                            alt=""
                        />
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
        <button onClick={themeChange} className="bg-yellow-300 p-2 rounded-full text-black">{theme === 'light' ? <MdOutlineDarkMode /> : <MdLightMode />}</button>
      </div>
    </div>
    <div className="flex items-center gap-1 mt-4">
        <p onClick={()=>navigate("/")} className="bg-black px-4 py-1 cursor-pointer rounded-2xl text-white">All</p>
        <p onClick={()=>navigate("/podcasts")} className="bg-black px-4 py-1 cursor-pointer rounded-2xl text-white">Podcasts</p>
        <p onClick={()=>navigate("/songs")} className="bg-black px-4 cursor-pointer py-1 rounded-2xl text-white">Songs</p>
    </div>
    </>
  );
};

export default Navbar;
