const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function deletePost(postToDelete) {
  prisma.post
    .delete({
      where: {
        id: postToDelete.id,
      },
    })
    .then((post) => {
      console.log("Post eliminato con successo: ", post);
    });
}

const postToDelete = {
  id: 5,
  title: "Quinto Post",
  slug: "quinto-post",
  image: "url_dell_immagine",
  content: "Contenuto del quinto post...",
  published: true,
};

deletePost(postToDelete);
