import prisma from "../../../prisma/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, age, email, country,id,password} = req.body;
// console.log(id,"usersignup")
    await prisma.$connect();
    const result = await prisma.user.create({
      data: {
        id,
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
  
}


