import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "DELETE") {
  const { ccode} = req.body;
    // console.log(desc,name,"prod add")

    const prod = await prisma.cloth.delete({
        where: { ccode}
      })
      
          console.log("cloth  deleted",prod)
          res.json(prod);
        }
    }
