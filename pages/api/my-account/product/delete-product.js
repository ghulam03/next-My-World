import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "DELETE") {
  const { pcode} = req.body;
    // console.log(desc,name,"prod add")

    const prod = await prisma.product.delete({
        where: { pcode}
      })
      
          console.log("product  deleted",prod)
          res.json(prod);
        }
    }
