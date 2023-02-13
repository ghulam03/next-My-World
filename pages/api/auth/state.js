import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  await prisma.$connect();
  if (req.method === "GET") {
    console.log("state server")

const rest={
    a:"good"
}
    res.json(rest);
  }
}
