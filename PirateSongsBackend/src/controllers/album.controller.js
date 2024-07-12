import {v2 as cloudinary} from "cloudinary";
import {Album} from "../models/albums.models.js";

const addAlbum=async(req,res)=>{
    try {
        const {name,bgColor,desc}=req.body;
        const imageFile=req.file;
        
        if(!imageFile){
            return res.status(400).send("Image is required");
        }
            const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
            await Album.create({
                name,bgColor,desc,image:imageUpload.secure_url
            });
            return res.status(200).send("new Album has been added");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while adding the album");
    }

}
const listAlbum=async(req,res)=>{
    try {
        const allAlbums=await Album.find({});
        if(!allAlbums){
            return res.status(400).send("Error while fetching the list of albums");
        }
        return res.status(200).json({success:true,albums:allAlbums});
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching the album");
    }
}
const deleteAlbum=async(req,res)=>{
    try {
        const {id}=req.body;
        await Album.findOneAndDelete(id)
        res.json({success:true,message:"Album deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the album");
    }
}
export {addAlbum,listAlbum,deleteAlbum};