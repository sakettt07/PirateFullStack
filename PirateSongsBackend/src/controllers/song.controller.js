import {v2 as cloudinary} from "cloudinary";
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

        console.log(name, desc, album, imageUpload, audioUpload);
        res.status(200).send("Song added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while adding the song");
    }

}
const listSong=async()=>{

}
export{addSong,listSong};