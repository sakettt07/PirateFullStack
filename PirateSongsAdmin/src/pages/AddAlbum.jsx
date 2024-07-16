import React, { useState } from "react";
import { assets } from "../assets/assets";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const AddAlbum = () => {
  const [image, setImage] = useState(null); 
  const [color, setColor] = useState("#764b4b");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColor", color);

      const response = await axios.post(`${url}/api/album/add`, formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDesc("");
        setImage(null);

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding album:", error.message);
      toast.error("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-yellow-800 rounded-full animate-spin border-t-black"></div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-8 items-start text-gray-600">
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
            className="w-24 cursor-pointer"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload Area"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Type Here"
          type="text"
          value={name}
          className="bg-transparent outline-green-700 border-2 border-gray-300 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Type Here"
          type="text"
          value={desc}
          className="bg-transparent outline-green-700 border-2 border-gray-300 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Background Colour</p>
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          type="color"
        />
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

export default AddAlbum;
