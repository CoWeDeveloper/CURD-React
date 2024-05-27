import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    fileSelected: String,
    likeCount:{
        type: Number,
        default: 0 
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

// turning our schemea into model 
const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;