// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed Users
    const hashedPassword = await bcrypt.hash('securepassword', 10); // Hash the password

    const user1 = await prisma.user.create({
      data: {
        email: 'user1@example.com',
        name: 'User One',
        password: hashedPassword, // Store the hashed password
        posts: {
          create: [
            {
              content: 'First post by User One',
              published: true,
            },
            { content: 'Another post by User One' },
          ],
        },
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'user2@example.com',
        name: 'User Two',
        password: hashedPassword,
        posts: {
          create: {
            content: 'First post by User Two',
            published: true,
          },
        },
      },
    });

    // Seed Comments (with user connected to the post)
    await prisma.comment.create({
      data: {
        content: "User one's first comment",
        post: {
          create: {
            content: "A post that user one commented on",
            user: {
              connect: {
                id: user1.id, // Connect the post to user1
              },
            },
          },
        },
        user: {
          connect: {
            id: user1.id,
          },
        },
      },
    });

    await prisma.comment.create({
      data: {
        content: "User two's first comment",
        post: {
          create: {
            content: "A post that user two commented on",
            user: {
              connect: {
                id: user2.id, // Connect the post to user2
              },
            },
          },
        },
        user: {
          connect: {
            id: user2.id,
          },
        },
      },
    });

    // Seed Likes (with user connected to the post)
    await prisma.like.create({
      data: {
        post: {
          create: {
            content: "A post that user one liked",
            user: {
              connect: {
                id: user1.id, // Connect the post to user1
              },
            },
          },
        },
        user: {
          connect: {
            id: user1.id,
          },
        },
      },
    });

    console.log('Seed data created:', { user1, user2 });
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();