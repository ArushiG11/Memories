import express from 'express'; 

// the callback function on that specific route we are defining logic  in handler function inside controllers
import { createPosts, getPosts, updatePost, deletePost, likePost } from '../controllers/posts.js';

// set up router
const router = express.Router();
router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;