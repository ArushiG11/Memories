import postMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req,res) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req,res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    // first we need to extract that id
    const {id: _id} = req.params;
    const post = req.body; //receiving the bost data to update
    // then check all the posts to find the post wth that id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post eith that id');

    // if we found that valid id then we will update by calling the Post Model and getting that post using that id
    const updatedPost = await postMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post eith that id');

    try {
        await postMessage.findByIdAndDelete(id);
        res.json({ message: 'Post Deleted!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await postMessage.findById(id);

    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}