import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  const db= await prisma.$connect();
  if (req.method === "GET") {

const rest= await prisma.animal.findMany(
     )
    res.json(rest);
  }
}
