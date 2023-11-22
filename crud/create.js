const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const posts = require("../posts");

// prisma.post
//   .createMany({
//     data: posts.map((post) => {
//       return post;
//     }),
//   })
//   .then((post) => {
//     console.log(post);
//   });

// funzione creazione di un post

function createPost(title, image, content) {
  prisma.post
    .create({
      data: {
        title: title,
        slug: title.toLowerCase().trim().replace(" ", "-"),
        image: image,
        content: content,
      },
    })
    .then((post) => {
      console.log(`Nuovo post creato: `, post);
    });
}

createPost("settimo post", "url_img", "un post favoloso");
