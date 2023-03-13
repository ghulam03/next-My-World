import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
   await prisma.$connect();
  if (req.method === "POST") {
    const { email } = req.body;
    // console.log(email,"email")
    

const rest= await prisma.user.findUnique({
      where:{
        email}
    })
    // console.log(rest,"user found")
    res.json(rest);
  }
}
