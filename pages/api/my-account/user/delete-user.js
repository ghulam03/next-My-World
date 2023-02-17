import prisma from "../../../../prisma/prisma";

export default async function handle(req, res) {
   await prisma.$connect();
  if (req.method === "DELETE") {
    const { email } = req.body;
    // console.log(email,"email")
    
//
const user = await prisma.user.delete({
  where: { email}
})

    console.log("user deleted",user)
    res.json(user);
  }
}
