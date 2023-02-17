import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { id,userId, pcode,title,desc,rating ,price} = req.body;
    // console.log(desc,name,"prod add")

const rest= await prisma.product.create({
      data:{
        id,pcode,userId,title,price,desc,rating}
    })
    // console.log(rest)
    res.json(rest);
  }
}
