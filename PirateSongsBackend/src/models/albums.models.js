import mongoose,{Schema} from "mongoose";
const albumSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    bgColor:{
        type:String,
        required:true
    },
    song:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
})

export const Album = mongoose.model("Album", albumSchema)
