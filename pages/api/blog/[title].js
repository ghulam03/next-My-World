import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
    if (req.method === "PUT") {
        const { title } = req.body;
        // console.log(title)
      await prisma.$connect();
    
const data= await prisma.blog.findUnique({
      where:{
        title:title
      }
    })
    // console.log(data,"single blog")
    res.json(data);
  }
}
