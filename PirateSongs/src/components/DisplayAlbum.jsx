import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayAlbum = ({album}) => {
    const {id}=useParams();
    const [albumssData,setAlbumssData]=useState([]);
    const {playWithId,albumData,songsData}=useContext(PlayerContext)

    useEffect(()=>{
      albumData.map((item)=>{
        if(item._id==id){
          setAlbumssData(item)
        }
      })
    },[albumssData])
  return albumData ? (
    <>
     <Navbar /> 
     <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumssData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-semibold mb-4 md:text-7xl'>{albumssData.name}</h2>
            <h4>{albumssData.desc}</h4>
            <p className='mt-1 gap-2'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                . 1,2323,34 likes
                . <b>50 songs,</b>
                about 2 hr 30 min
            </p>
        </div>
     </div>
     <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
     </div>
     <hr />
     {songsData.filter((item)=>item.name==album.name).map((item,index)=>(
        <div onClick={()=>playWithId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer hover:bg-[#ffffff26] text-[#a7a7a7]'>
                <p className='text-white'>
                    <b className='mr-4 text-[#d58f8f]'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
     ))}
    </>
  ):null
}

export default DisplayAlbum
