import isAuthHandle from "../../utils/isAuth";
import prisma from "../../prisma/prisma";
import styles from "../../styles/clothCode.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CCode(props) {
  const isAuth=useSelector((state)=>state.auth.isAuth)
  const router=useRouter()

  
  
  console.log("propsfor ccode", props);

  return (
    <>
      <div className={styles.container}>
        <h3>Title is:{props.data.title}</h3>
        <h3>Price is:{props.data.price}</h3>
        <h3>Description is:{props.data.desc} </h3>
        <h3>Rating is:{props.data.rating} </h3>
        <h3>Cloth Code is:{props.data.ccode} </h3>
        <h3>Posted By:{props.data.userId} </h3>
        {isAuth && <button>Add To Cart</button>}
      </div>
      <button className={styles.button} onClick=
      {()=>router.push("/cloth")} >Back</button>
      
    </>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log("slug is",params);
  const ccode = params.ccode;
  // console.log(pcode);
  await prisma.$connect();
  const data = await prisma.cloth.findUnique({ where: { ccode } });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  await prisma.$connect();
  const data = await prisma.cloth.findMany();
  // console.log(data, "product");
  const paths = data.map((d) => ({
    params: { ccode: d.ccode },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
