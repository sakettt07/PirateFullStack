import {v2 as cloudinary} from "cloudinary";
import {Song} from "../models/songs.model.js";
const addSong=async(req,res)=>{
    try {
        const { name, desc, album } = req.body;
        const audioFile = req.files.audio ? req.files.audio[0] : null;
        const imageFile = req.files.image ? req.files.image[0] : null;

        if (!audioFile || !imageFile) {
            return res.status(400).send("Audio and image files are required");
        }

        // Upload to Cloudinary
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const duration=`${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
        // uploaded to database.
        await Song.create({
            name,
            desc,
            album,
            file: audioUpload.secure_url,
            image: imageUpload.secure_url,
            duration
        });

        res.status(200).send("Song added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while adding the song");
    }

}
const listSong=async(req,res)=>{
    try {
        const songs=await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        res.status(400).send("error while fetching all the songs")
    }

}
const removeSong = async (req, res) => {
    try {
        const { id } = req.body; // Using req.body to get the id from the request body
        if (!id) {
            return res.status(400).json({ success: false, message: "ID is required" });
        }

        const song = await Song.findByIdAndDelete(id);
        if (!song) {
            return res.status(404).json({ success: false, message: "Song not found" });
        }

        res.json({ success: true, message: "Song has been removed" });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ success: false, message: "An error occurred while removing the song" });
    }
}
export{addSong,listSong,removeSong};