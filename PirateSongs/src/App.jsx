import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Loader from "./components/Loader";
import { songsData } from "./assets/assets";

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
          {songsData.length !== 0 ? (
            <>
              <div className="h-[90%] flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
            </>
          ) : null}
          <audio ref={audioRef} src={track?track.file:""} preload="auto"></audio>
        </>
      ) : (
        <Loader onExplore={changeExplore} />
      )}
    </div>
  );
};

export default App;
