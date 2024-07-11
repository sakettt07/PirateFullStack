import  express from "express";
import cors from "cors";
import 'dotenv/config';
import songRouter from "./src/routes/song.routes.js";
import albumRouter from "./src/routes/album.routes.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";


// app config
const app=express();
const port=process.env.PORT;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// necessary routes
app.use("/api/song",songRouter)
app.use("/api/album",albumRouter)

app.listen(port,()=>{
    console.log(`Your server is running on ${port}`);
});