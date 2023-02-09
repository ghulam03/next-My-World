import prisma from "../../prisma/prisma"

export default  handle = (req, res)=> {
     const {aname, aage, acolor, acountry}=req.body;
     console.log(aname, aage, acolor, acountry)
     const result=prisma.animal.create(
        {
            data:{
                name:aname,
                age:aage,
                color:acolor,
                country:acountry


            }
        }
     )

     res.status(200).json({result})

// };
// async function main() {
//     await prisma.$connect()
  
//     await prisma.user.create({
//       data: {
//         name: 'Rich',
//         email: 'hello@prisma.com',
//         posts: {
//           create: {
//             title: 'My first post',
//             body: 'Lots of really interesting stuff',
//             slug: 'my-first-post',
//           },
//         },
//       },
//     })
  
//     const allUsers = await prisma.user.findMany({
//       include: {
//         posts: true,
//       },
//     })
//     console.dir(allUsers, { depth: null })
//   }