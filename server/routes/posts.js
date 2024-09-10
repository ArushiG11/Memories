import express from 'express'; 

// the callback function on that specific route we are defining logic  in handler function inside controllers
import { createPosts, getPosts } from '../controllers/posts.js';

// set up router
const router = express.Router();
router.get('/',getPosts);
router.get('/',createPosts);

export default router;