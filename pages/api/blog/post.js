import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  const { title, content, authorEmail } = req.body;
  console.log(title,content,authorEmail);
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
}
