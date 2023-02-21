import isAuthHandle from "../../utils/isAuth";
import prisma from "../../prisma/prisma";
import styles from "../../styles/productCode.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function PCode(props) {
  const isAuth=useSelector((state)=>state.auth.isAuth)
  const router=useRouter()
  console.log("propsfor pcode", props);

  return (
    <> 
      <div className={styles.container}>
        <h3>Title is:{props.data.title}</h3>
        <h3>Price is:{props.data.price}</h3>
        <h3>Description is:{props.data.desc} </h3>
        <h3>Rating is:{props.data.rating} </h3>
        <h3>Product Code is:{props.data.pcode} </h3>
        <h3>Posted By:{props.data.userId} </h3>
        {isAuth && <button>Add To Cart</button>}
      </div>
      <button className={styles.button} onClick=
      {()=>router.push("/product")} >Back</button>
     
    </>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log("slug is",params);
  const pcode = params.pcode;
  // console.log(pcode);
  await prisma.$connect();
  const data = await prisma.product.findUnique({ where: { pcode } });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  await prisma.$connect();
  const data = await prisma.product.findMany();
  // console.log(data, "product");
  const paths = data.map((d) => ({
    params: { pcode: d.pcode },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
