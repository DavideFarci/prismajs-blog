const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function findPost(id) {
  prisma.post
    .findFirst({
      where: {
        id: id,
      },
    })
    .then((post) => {
      console.log(`Post con id ${id}:`, post);
    });
}

function findPublishedPosts() {
  prisma.post
    .findMany({
      where: {
        published: true,
      },
    })
    .then((posts) => {
      console.log("I seguenti post sono stati pubblicati: ", posts);
    });
}

findPost(7);
findPublishedPosts();
