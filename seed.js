// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      passwordHash: 'hashedpassword1',
      avatarUrl: 'https://example.com/avatar1.png',
      bio: 'Software developer',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_smith',
      displayName: 'Jane Smith',
      email: 'jane.smith@example.com',
      passwordHash: 'hashedpassword2',
      avatarUrl: 'https://example.com/avatar2.png',
      bio: 'Graphic designer',
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: 'alice_jones',
      displayName: 'Alice Jones',
      email: 'alice.jones@example.com',
      passwordHash: 'hashedpassword3',
      avatarUrl: 'https://example.com/avatar3.png',
      bio: 'Content writer',
    },
  });

  const user4 = await prisma.user.create({
    data: {
      username: 'bob_brown',
      displayName: 'Bob Brown',
      email: 'bob.brown@example.com',
      passwordHash: 'hashedpassword4',
      avatarUrl: 'https://example.com/avatar4.png',
      bio: 'Marketing specialist',
    },
  });

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      content: 'This is my first post!',
      userId: user1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      content: 'Hello, world!',
      userId: user2.id,
    },
  });

  const post3 = await prisma.post.create({
    data: {
      content: 'Check out my new article on content marketing.',
      userId: user3.id,
    },
  });

  const post4 = await prisma.post.create({
    data: {
      content: 'Just finished a great marketing campaign!',
      userId: user4.id,
    },
  });

  const post5 = await prisma.post.create({
    data: {
      content: 'Excited to start my new project!',
      userId: user1.id,
    },
  });

  const post6 = await prisma.post.create({
    data: {
      content: 'Designing a new logo for a client.',
      userId: user2.id,
    },
  });

  // Attachments for posts
  await prisma.media.createMany({
    data: [
      {
        postId: post1.id,
        type: 'IMAGE',
        url: 'https://example.com/image1.png',
      },
      {
        postId: post2.id,
        type: 'IMAGE',
        url: 'https://example.com/image2.png',
      },
      {
        postId: post3.id,
        type: 'IMAGE',
        url: 'https://example.com/image3.png',
      },
      {
        postId: post4.id,
        type: 'IMAGE',
        url: 'https://example.com/image4.png',
      },
      {
        postId: post5.id,
        type: 'IMAGE',
        url: 'https://example.com/image5.png',
      },
      {
        postId: post6.id,
        type: 'IMAGE',
        url: 'https://example.com/image6.png',
      },
    ],
  });

  console.log({ user1, user2, user3, user4, post1, post2, post3, post4, post5, post6 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
