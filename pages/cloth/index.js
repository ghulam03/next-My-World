import ClothCard from "../../components/cloth/ClothCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log("all cloth",props.cloths)
    return (
        <>
        {props.cloths.map((c)=>{
            return (
                <>
                 <ClothCard key ={c.id} ccode={c.ccode} userId={c.userId} title={c.title}  rating={c.rating} desc={c.desc} price={c.price}/>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps() {
    await prisma.$connect();
    const cloths = await prisma.cloth.findMany();

    
    return {
      props: {cloths} ,
      revalidate: 10,
    }
  }

