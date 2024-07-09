import  express from "express";
import cors from "cors";
import 'dotenv/config';
import songRouter from "./src/routes/song.routes.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";


// app config
const app=express();
const port=process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// necessary routes
app.use("/api/song",songRouter)
app.get("/",(req,res)=>{
    res.send("helloe this is my first full stakc application");
})

app.listen(port,()=>{
    console.log(`Your server is running on ${port}`);
});