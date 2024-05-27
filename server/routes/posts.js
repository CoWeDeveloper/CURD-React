    import express  from "express";

    import { getPosts, createPost, updatePost } from "../controllers/post.js";

    const router = express.Router();

    router.get("/", getPosts);
    router.post("/", createPost);
    router.patch("/:id", updatePost);
    // after that in index.js we create app.use("/posts") so every posts will reached at localhost:4000/posts
//  Next create all logic in controller to aviod cluster over here

export default router;