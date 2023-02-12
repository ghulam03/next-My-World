import BlogCard from "../../components/blog/BlogCard";
import prisma from "../../prisma/prisma";

export default function Index(props) {
    console.log(props)
    return (
        <>
        {props.blogs.map((blog)=>{
            return (
                <>
                 <BlogCard title={blog.title} desc={blog.desc} author={blog.author}/>
                </>
            )
        })}
        </>
    );
}
export async function getStaticProps(context) {
    await prisma.$connect();
    const blogs = await prisma.blog.findMany();

    
    return {
      props: {blogs} // will be passed to the page component as props
    }
  }