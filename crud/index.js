const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function returnAllPosts() {
  prisma.post.findMany({}).then((posts) => {
    console.log(posts);
  });
}

returnAllPosts();
