import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json( {limit: "30mb", extended : true}) );
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes); //every routes inside the post routes start with post(localhosst:4000/posts/)
//connecting with database
const connectURL = "mongodb+srv://CURD_React:React123@cluster0.zrokz.mongodb.net/";
const PORT = process.env.PORT || 4000

mongoose.connect(connectURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> app.listen(PORT, ()=>{console.log(`Backend server is running on ${PORT}`)}))
    .catch((error)=> console.log(error.message));
   


