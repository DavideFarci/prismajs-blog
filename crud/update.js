const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function updatePost(postToUpdate, postUpdated) {
  prisma.post
    .update({
      where: {
        id: postToUpdate.id,
      },
      data: {
        title: postUpdated.title,
        slug: postUpdated.title.toLowerCase().trim().replace(" ", "-"),
        image: postUpdated.image,
        description: postUpdated.description,
      },
    })
    .then((post) => {
      console.log(`Il post ${postToUpdate.title} è stato modificato:`, post);
    });
}

const postToUpdate = {
  id: 2,
  title: "Secondo Post",
  slug: "secondo-post",
  image: "url_dell_immagine",
  content: "Contenuto del secondo post...",
  published: false,
};

const postUpdated = {
  id: 2,
  title: "Post sensazionale",
  slug: "secondo-post",
  image: "url_dell_immagine",
  content: "Contenuto del secondo post...",
  published: false,
};

updatePost(postToUpdate, postUpdated);
