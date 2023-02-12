import BlogCard from "../../components/blog/blog-card";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log(props)
    return (
        <>
        {props.blogs.map((blog)=>{
            return (
                <>
                 <BlogCard/>
                 <p>{blog.name}</p>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps(context) {
    await prisma.$connect();
    const blogs = await prisma.animal.findMany();

    
    return {
      props: {blogs} // will be passed to the page component as props
    }
  }