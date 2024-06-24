// server/src/post/post.controller.ts

import { Router } from 'express';
import { PostService } from './post.service';

const router = Router();
const postService = new PostService();

router.get('/posts', async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching posts.' });
  }
});

export default router;
