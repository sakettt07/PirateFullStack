import React, { useContext, useEffect, useRef } from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import AllSongs from './AllSongs'
import AllPodcasts from './AllPodcasts'

const Display = () => {

  const {albumData}=useContext(PlayerContext);
  const displayRef=useRef();
  const location=useLocation();
  const isAlbum=location.pathname.includes("album");
  const albumId=isAlbum ? location.pathname.split('/').pop():""
  const bgColor=isAlbum && albumData.length>0 ? albumData.find((x)=>(x._id===albumId)).bgColour:"#121212"

  const {theme}=useContext(PlayerContext);

  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
      displayRef.current.style.background = theme === 'light' ? '#7e8fd6' : '#121212';
      displayRef.current.style.color = theme === 'light' ? '#000' : '#fff';

    }
  },[isAlbum, bgColor, theme])
  return (
    <div ref={displayRef} className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0'>
        {
          albumData.length >0 ?<Routes>
          <Route path='/' element={<DisplayHome />} />
          <Route path='/songs' element={<AllSongs />} />
          <Route path='/podcasts' element={<AllPodcasts />} />
          <Route path='/album/:id' element={<DisplayAlbum album={albumData.find((x)=>(x._id===albumId))} />} />
      </Routes>
      :null
        }
      
    </div>
  )
}

export default Display
