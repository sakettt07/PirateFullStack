import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const AddSong = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState(null);
  const [image, setImage] = useState(null);
  const [album, setAlbum] = useState("none");

  // useEffect(() => {
  //   // Fetch album data if needed
  //   const fetchAlbums = async () => {
  //     try {
  //       const response = await axios.get(`${url}/api/albums`);
  //       setAlbumData(response.data.albums);
  //     } catch (error) {
  //       console.error("Error fetching albums:", error);
  //     }
  //   };

  //   fetchAlbums();
  // }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);

      const response = await axios.post(`${url}/api/song/add`, formData);

      if (response.data.success) {
        toast.success("Song added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(null);
        setSong(null);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error adding song:", error.message);
      toast.error("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-yellow-800 rounded-full animate-spin border-t-black"></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-800"
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song">
            <img
              src={song ? assets.upload_added : assets.upload_song}
              className="w-24 cursor-pointer"
              alt="Upload Song"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24 cursor-pointer"
              alt="Upload Image"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          value={name}
          className="bg-transparent w-96 p-2 outline-black border-2"
          placeholder="Type Here"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          required
          value={desc}
          className="bg-transparent w-96 p-2 outline-black border-2"
          placeholder="Type Here"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          value={album}
          className="bg-transparent outline-green-700 w-[150px] border-2 p-2.5"
        >
          <option value="none">None</option>
          {albumData.map((album) => (
            <option key={album.id} value={album.id}>
              {album.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="text-base bg-black text-white p-2 rounded-md px-4"
      >
        Add
      </button>
    </form>
  );
};

export default AddSong;
