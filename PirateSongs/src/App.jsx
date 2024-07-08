import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Loader from "./components/Loader";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [onExplore, setOnExplore] = useState(false);

  const changeExplore = () => {
    setOnExplore(!onExplore);
  };

  return (
    <div className="bg-zinc-800 w-full h-screen">
      {onExplore ? (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
          <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </>
      ) : (
        <Loader onExplore={changeExplore} />
      )}
    </div>
  );
};

export default App;
