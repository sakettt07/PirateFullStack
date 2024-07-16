import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {

  const [data,setData]=useState([]);
  
  const fetchSongs=async()=>{
    try {
      const response=await axios.get(`${url}/api/song/listsongs`);

      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      
    }

  }

  const removeSong=async(id)=>{
    try {
      const response=await axios.post(`${url}/api/song/remove`,{id});
      if(response.data.success){
        toast.success("Song Deleted")
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Error while deleting the song")
    }
  }
  useEffect(()=>{
    fetchSongs();

  },[])
  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-3 p-3 border-gray-300 bg-gray-600 text-white text-sm mr-10'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item,index)=>{
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-3 p-3'>
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p className='cursor-pointer' onClick={()=>removeSong(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListSong
