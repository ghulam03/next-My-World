import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { title,desc,category,id } = req.body;
    console.log(desc,id,"blog addition")

const rest= await prisma.blog.create({
      data:{
        title,category,desc,id}
    })
    res.json(rest);
  }
}
