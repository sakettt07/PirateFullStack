import  express from "express";
import cors from "cors";
import 'dotenv/config';


// app config
const app=express();
const port=process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// necessary routes
app.get("/",(req,res)=>{
    res.send("helloe this is my first full stakc application");
})

app.listen(port,()=>{
    console.log(`Your server is running on ${port}`);
});