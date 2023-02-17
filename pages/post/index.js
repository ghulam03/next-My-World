import PostCard from "../../components/post/PostCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
  console.log(props);
  return (
    <>
      {props.posts.map((post) => {
        return (
          <>
            <PostCard
              title={post.title}
              desc={post.desc}
              category={post.category }
              writer={post.writer}
              id={post.id}
              
            />
          </>
        );
      })}
    </>
  );
}
export async function getStaticProps(context) {
  await prisma.$connect();
  const posts = await prisma.post.findMany();

  return {
    props: { posts }, // will be passed to the page component as props
  };
}