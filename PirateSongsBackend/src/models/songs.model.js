import mongoose, { Schema } from "mongoose";

const songSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    album:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }
})

export const Song = mongoose.model("Song", songSchema)
