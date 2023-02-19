import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();

  const { uId } = req.body;
  // console.log( id, "will be added to cart");

  const rest = await prisma.cart.findMany({
    where: {
      uId,
    },
    select: {
      pcode: true,
    },
  });
  console.log(rest);
  const data = await prisma.product.findMany({
    where: {
      pcode: {
        in: rest,
      },
    },
  });

  // res.json(rest);
}
