import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  const db= await prisma.$connect();
  console.log(db)
  if (req.method === "POST") {
    const { title,desc, author } = req.body;
    console.log(title,desc,author)

const rest= await prisma.blog.create({
      data:{
        title:title,
        desc:desc,
        author:author
      }
    })
    res.json(rest);
  }
}
