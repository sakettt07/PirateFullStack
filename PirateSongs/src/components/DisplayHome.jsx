import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const {songsData,albumData}=useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumData.map((item,index)=>(
          <AlbumItem key={index} image={item.image} name={item.name} id={item._id} desc={item.desc} />
        ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Biggest Hit's</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(
          <SongItem key={index} image={item.image} name={item.name} id={item._id} desc={item.desc} />
        ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
