import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { id,userId, ccode,title,desc,rating ,price} = req.body;
    // console.log(desc,name,"prod add")

const rest= await prisma.cloth.create({
      data:{
        id,ccode,userId,title,price,desc,rating}
    })
    console.log("new cloth data",rest)
    res.json(rest);
  }
}
