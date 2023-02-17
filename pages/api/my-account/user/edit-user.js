import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, age, email, country, password } = req.body;
    await prisma.$connect();
    const result = await prisma.user.update({
      where: { email },

      data: {
        name,
        password,
        age,
        country,
      },
    });

    res.json(result);
  }
}
