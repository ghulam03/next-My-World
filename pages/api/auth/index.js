import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, age, email, country,password } = req.body;

    await prisma.$connect();
    const result = await prisma.user.create({
      data: {
        name: name,
        age: age,
        country: country,
        email: email,
        password:password
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
