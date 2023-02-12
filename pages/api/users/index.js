import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, age, email, country,password } = req.body;

    await prisma.$connect();
    const result = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password:password,
        age: age,
        country: country
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


// import prisma from "../../../prisma/prisma";
// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, password, age, country } = req.body;
//     console.log(name, email, password);
//     prisma.users.create({
//       data: {
//         name,
//         email,
//         password,
//         age,
//         country,
//       },
//     });
//     res.status(200);
//   }
// }
