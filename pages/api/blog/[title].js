import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
    if (req.method === "PUT") {
        const { title } = req.body;
        console.log(title)
        // const rest={a:"goon"}
      await prisma.$connect();
    
// const data =
const data= await prisma.blog.findUnique({
      where:{
        title:title
      }
    })
    console.log(data)
    res.json(data);
  }
}
