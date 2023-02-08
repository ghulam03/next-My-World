import prisma from "../../prisma/prisma"

export default  handler = (req, res)=> {
     const {aname, aage, acolor, acountry}=req.body;
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

};