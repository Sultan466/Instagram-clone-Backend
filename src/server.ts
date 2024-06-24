// server/server.ts

import express from 'express';
import cors from 'cors';
import postRouter from '../src/post/post.controller';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/api', postRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
