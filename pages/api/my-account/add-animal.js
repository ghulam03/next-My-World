import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  const db= await prisma.$connect();
  console.log(db)
  if (req.method === "POST") {
    const { name, age,desc,color,country } = req.body;
    console.log(desc,name)

const rest= await prisma.animal.create({
      data:{
        name,age,color,desc,country}
    })
    res.json(rest);
  }
}
