import prisma from "../../../prisma/prisma";
export default function  handler(req, res) {
  const { name, email, password } = req.body;
  console.log(name, email, password);
   prisma.users.create({
    data: {
      name,
      email,
      password
    },
  });
  res.status(200);
}
