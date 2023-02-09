import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { aname, aage, acolor, acountry } = req.body;

    await prisma.$connect();
    const result = await prisma.animal.create({
      data: {
        name: aname,
        age: aage,
        country: acountry,
        color: acolor,
      },
    });

    // res.status(200).json({ aname, aage });
    res.json(result);
  }
  if (req.method === "GET") {
    await prisma.$connect();
    const result = await prisma.animal.findMany();
    res.json(result);
  }
}
