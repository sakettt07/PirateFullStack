import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

const url='https://piratesongsbackend.onrender.com'
    
    // all states
    const[songsData,setSongsData]=useState([])
    const[albumData,setAlbumData]=useState([])
    const [track,setTrack]=useState(songsData[2]);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const [theme,setTheme]=useState("dark")
    

// play logic
    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }
// pause logic

    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }
    // play any song with id
    const playWithId=async(id)=>{
        await songsData.map((item)=>{
            if(id===item._id){
                setTrack(item)
            }
        })
        await audioRef.current.play();
        setPlayStatus(true);
    }
    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.onTimeUpdate=()=>{
                seekBar.current.style.width=(Math.floor(audioRef.current.currentTime /audioRef.current.duration*100))+"%"
                setTime({
                    currentTime:{
                        
                        second:Math.floor(audioRef.current.currentTime %60),
                        minute:Math.floor(audioRef.current.currentTime /60)
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration %60),
                        minute:Math.floor(audioRef.current.duration /60)
                    }
                })
            }
        }, 1000);

    },[audioRef])

    const previous=async()=>{
        songsData.map(async(item,index)=>{
            if(track._id===item._id && index>0){
                await setTrack(songsData[index-1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }
    const next=async()=>{
        songsData.map(async(item,index)=>{
            if(track._id===item._id && index<songsData.length){
                await setTrack(songsData[index+1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const themeChange = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const seekSong=async(e)=>{
        audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)

    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,time,setTime,playStatus,setPlayStatus,
        play,pause,playWithId,previous,next,seekSong,theme,setTheme,themeChange,songsData,albumData
    };

    // getting the responses from the backend

    const getSongsData=async()=>{
        try {
            const response=await axios.get(`${url}/api/song/listsongs`);
            // console.log(response.data)
            setSongsData(response.data);
            setTrack(response.data[0])
        } catch (error) {
            console.log(error)
            
        }
    }
    const getAlbumsData=async()=>{
        try {
            const response=await axios.get(`${url}/api/album/listalbums`);
            // console.log(response.data)
            setAlbumData(response.data.albums)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getSongsData();
        getAlbumsData();
    })



    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
