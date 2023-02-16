import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "PUT") {
    const { title } = req.body;
    // console.log(title)
    await prisma.$connect();

    const data = await prisma.post.findUnique({
      where: {
        title: title,
      },
    });
    // console.log(data,"single post")
    res.json(data);
  }
}
