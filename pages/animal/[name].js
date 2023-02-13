import prisma from "../../prisma/prisma";
import styles from "../../styles/animalName.module.css"
export default function Title(props) {
  console.log(props, "props");

  return (
    <>
      <div className={styles.container}>
        <h3>Name is:{props.data.name}</h3>
        <h3>Age is:{props.data.age} </h3>
        <h3>Color is:{props.data.color} </h3>
        <h3>Country is:{props.data.country} </h3>
        <h3>Description is:{props.data.desc} </h3>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(params);
  const name = params.name;
  console.log(name);
  await prisma.$connect();
  const data = await prisma.animal.findUnique({ where: { name } });

  /** Don't do this 
  const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
  const data = await response.json()
  */

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
    await prisma.$connect();
  const data = await prisma.animal.findMany()
  console.log(data,"animal")
  const paths = data.map((d) => ({
    params: { name: d.name },
  }))
  console.log(paths)
    
  return {
    // paths: [{  params: { name: "cow" } }, { params: { name: "lion" } }],
    // paths:paths,
    paths,
    fallback: false,
  };
}
