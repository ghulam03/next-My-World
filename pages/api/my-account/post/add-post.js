import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { title, desc, category, id,writer } = req.body;
    console.log(desc, id, "post addition");

    const rest = await prisma.post.create({
      data: {
        title,
        category,
        desc,
        id,
        writer
      },
    });
    res.json(rest);
  }
}
