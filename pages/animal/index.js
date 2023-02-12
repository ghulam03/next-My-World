import AnimalCard from "../../components/animal/AnimalCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log(props)
    return (
        <>
        {props.animals.map((animal)=>{
            return (
                <>
                 <AnimalCard name={animal.name}  color={animal.color} age={animal.age} desc={animal.desc} country={animal.country}/>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps() {
    await prisma.$connect();
    const animals = await prisma.animal.findMany();

    
    return {
      props: {animals} // will be passed to the page component as props
    }
  }

