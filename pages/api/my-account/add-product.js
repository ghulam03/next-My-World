import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { name, pcode,desc,rating,category } = req.body;
    console.log(desc,name,"prod add")

const rest= await prisma.product.create({
      data:{
        name,pcode,desc,category,rating}
    })
    // console.log(rest)
    res.json(rest);
  }
}
