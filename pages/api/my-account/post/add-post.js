import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { userId,title, desc, category, id } = req.body;
    console.log(desc, id, "post addition");

    const data = await prisma.post.create({
      data: {userId,
        title,
        category,
        desc,
        id
      },
    });
    res.json(data);
  }
}
