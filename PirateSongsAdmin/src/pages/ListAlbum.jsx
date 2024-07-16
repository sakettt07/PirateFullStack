import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App';

const ListAlbum = () => {
const [data,setData]=useState([])
  const fetchAlbums=async()=>{
    try {
      const response=await axios.get(`${url}/api/album/listalbums`);

      setData(response.data.albums);
      // console.log(response.data.albums)
    } catch (error) {
      
    }

  }
  const removeAlbum=async(id)=>{
    try {
      const response=await axios.post(`${url}/api/album/remove`,{id});
      if(response.data.success){
        toast.success("Album Deleted")
        await fetchAlbums();
      }
    } catch (error) {
      toast.error("Error while deleting the song")
    }
  }
  useEffect(()=>{
    fetchAlbums();

  },[])
  return (
    <div>
      <p>All albums</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-3 p-3 border-gray-300 bg-gray-600 text-white text-sm mr-10'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {data.map((item,index)=>{
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-3 p-3'>
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <p className='cursor-pointer' onClick={()=>removeAlbum(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListAlbum
