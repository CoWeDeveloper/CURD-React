import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res)=>{
    try {
        const postMessages = await postMessage.find();

        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message : error.message});
    }
}

export const createPost = async (req, res)=>{
    const post = req.body;  // when we create we get access to req.body

    const newPost = new postMessage(post); // we get data from front-end
   
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }

}

export const updatePost = async (req, res)=>{
    try {
        const {id : _id} = req.params ;
        const post = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No such post exist with given ID")
        const updatePost = await postMessage.findByIdAndUpdate(_id, post, {new: true} );
        res.json(updatePost);
        
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}