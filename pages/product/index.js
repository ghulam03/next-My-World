import ProductCard from "../../components/product/ProductCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log(props)
    return (
        <>
        {props.products.map((p)=>{
            return (
                <>
                 <ProductCard key ={p.pcode} name={p.name}  pcode={p.pcode} rating={p.rating} desc={p.desc} category={p.category}/>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps() {
    await prisma.$connect();
    const products = await prisma.product.findMany();

    
    return {
      props: {products} 
    }
  }

