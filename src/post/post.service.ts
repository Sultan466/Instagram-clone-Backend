
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PostService {
  async getPosts() {
    return await prisma.post.findMany({
      include: {
        user: true,
      },
    });
  }
}
