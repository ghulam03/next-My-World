import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "DELETE") {
  const { title } = req.body;
    // console.log(desc,name,"prod add")

    const post = await prisma.post.delete({
        where: { title}
      })
      
          console.log("product  deleted",post)
          res.json(post);
        }
    }
