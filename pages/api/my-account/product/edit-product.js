import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { title, price, desc, rating, pcode } = req.body;
    await prisma.$connect();
    const result = await prisma.product.update({
      where: { pcode },

      data: {
        title,
        price,
        desc,
        rating,
      },
    });
    console.log(result, "edited product");
    res.json(result);
  }
}
