import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { title, price, desc, rating, ccode } = req.body;
    await prisma.$connect();
    const result = await prisma.cloth.update({
      where: { ccode },

      data: {
        title,
        price,
        desc,
        rating,
      },
    });
    console.log("edited cloth",result );
    res.json(result);
  }
}
