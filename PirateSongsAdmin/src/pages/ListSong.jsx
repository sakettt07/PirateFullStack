import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';

const ListSong = () => {

  const [data,setData]=useState([]);
  
  const fetchSongs=async()=>{
    try {
      const response=await axios.get(`${url}/api/song/listsongs`);

      console.log(response.data);
    } catch (error) {
      
    }

  }
  useEffect(()=>{
    fetchSongs();

  },[])
  return (
    <div>
      <h1>Listing all the songs which are present on the platform</h1>
    </div>
  )
}

export default ListSong
