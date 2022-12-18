import express from 'express';
import { getFeedPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from '../middleware/authorization.js';

const router = express.Router()

/**Read */
router.get('/', verifyToken, getFeedPosts)

/***UPDATE */
router.patch('/:id/like', verifyToken, likePost)

export default router