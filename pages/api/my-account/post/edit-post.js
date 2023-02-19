import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { title, desc, category } = req.body;
    await prisma.$connect();
    const result = await prisma.post.update({
      where: { title },

      data: {
        category,
        desc,
      },
    });
    console.log(result, "edited post");
    res.json(result);
  }
}
