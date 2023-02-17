import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  const { email } = req.body;
  try{

    const prods = await prisma.product.findMany({
      where: {
        email,
      },
    });
    res.json(prods);
    console.log(prods,"my-account product view")
  }
  catch(error){
    console.log(error,"error y ")
    
  }
 
}
