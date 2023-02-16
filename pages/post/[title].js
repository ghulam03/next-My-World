import isAuthHandle from "../../utils/isAuth";
import prisma from "../../prisma/prisma";
import styles from "../../styles/postTitle.module.css";
import { useState } from "react";

export default function Title(props) {
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
        <h3>Post Title is:{props.data.title}</h3>
        <h3>Description is:{props.data.desc} </h3>
        <h3>Category is:{props.data.category} </h3>
        <h3>Written By:
          {/* {props.data.writer} */}
         </h3>
        <h3>Id is:{props.data.id} </h3>
        {isAuth && <button>Like</button>}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(params);
  const title = params.title;
  await prisma.$connect();
  const data = await prisma.post.findUnique({ where: { title } });
console.log('single post',data)
  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  await prisma.$connect();
  const data = await prisma.post.findMany();
  console.log(data, "single post");
  const paths = data.map((d) => ({
    params: { title: d.title },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
