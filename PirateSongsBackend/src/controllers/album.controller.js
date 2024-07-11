import {v2 as cloudinary} from "cloudinary";
import {Album} from "../models/albums.models.js";

const addAlbum=async(req,res)=>{
    try {
        const {name,bg,desc}=req.body;
        
    } catch (error) {
        
    }

}
const listAlbum=async(req,res)=>{

}
const deleteAlbum=async(req,res)=>{

}
export {addAlbum,listAlbum,deleteAlbum};