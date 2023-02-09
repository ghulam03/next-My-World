import prisma from "../../../prisma/prisma"

export default async function handle(req, res) {
    if (req.method === 'DELETE') {
        const id=req.query.id
        console.log("running")
        await prisma.$connect()

        const dataa=await prisma.animal.delete({
            where:{name:id}
        })
        res.json(dataa)
    }
    // if (req.method === 'PUT') {
    //     const id=req.query.id
    //     console.log("running")
    //     await prisma.$connect()

    //     const dataa=await prisma.animal.delete({
    //         where:{name:id}
    //     })
    //     res.json(dataa)
    // }
}