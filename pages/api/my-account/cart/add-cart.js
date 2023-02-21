import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { id, tprice, titem, uId, products } = req.body;

    console.log(id, "will be added to cart");

    const rest = await prisma.cart.create({
      data: {
        id,
        tprice,
        titem,
        uId,
        products: {
          create: {
            ...products,
          },
        },
      },
    });
    res.json(rest);
  }
}
