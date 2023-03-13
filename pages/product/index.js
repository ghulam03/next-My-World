import ProductCard from "../../components/product/ProductCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log("all product",props.products)
    return (
        <>
        {props.products.map((p)=>{
            return (
                <>
                 <ProductCard key ={p.id} pcode={p.pcode} userId={p.userId} title={p.title}  rating={p.rating} desc={p.desc} price={p.price}/>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps() {
    await prisma.$connect();
    const products = await prisma.product.findMany();

    console.log("all products",products)
    return {
      props: {products} ,
      revalidate: 10,
    }
  }

