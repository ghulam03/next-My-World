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
              userId={post.userId}
              desc={post.desc}
              category={post.category }
              
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
    props: { posts },
    revalidate: 10,
    // will be passed to the page component as props
  };
}
