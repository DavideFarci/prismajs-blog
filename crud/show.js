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

findPost(7);
