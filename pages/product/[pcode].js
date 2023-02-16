import isAuthHandle from "../../utils/isAuth";
import prisma from "../../prisma/prisma";
import styles from "../../styles/productCode.module.css";
import { useState } from "react";
export default function PCode(props) {
  console.log(props, "props");

  const [isAuth, setisAuth] = useState(false);
  async function authCall() {
    const isAuthh = await isAuthHandle();
    setisAuth(isAuthh);
  }
  authCall();

  return (
    <>
      <div className={styles.container}>
        <h3>Name is:{props.data.name}</h3>
        <h3>Rating is:{props.data.rating} </h3>
        <h3>Category is:{props.data.category} </h3>
        <h3>Description is:{props.data.desc} </h3>
        <h3>Model is:{props.data.pcode} </h3>
        {isAuth && <button>Add To Cart</button>}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(params);
  const pcode = params.pcode;
  console.log(pcode);
  await prisma.$connect();
  const data = await prisma.product.findUnique({ where: { pcode } });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  await prisma.$connect();
  const data = await prisma.product.findMany();
  console.log(data, "product");
  const paths = data.map((d) => ({
    params: { pcode: d.pcode },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
