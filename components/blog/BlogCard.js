import Link from "next/link";
import React from "react";
import styles from "./BlogCard.module.css";
function BlogCard(props) {
  // console.log(props,"blog-card prop");
  
  const path =`/blog/${props.title}`

//  function handleClick(title){
//   console.log("blog view",title)
  
//   }
  
  return (
    <>
      <div className={styles.container}>
        <h3>Title is:{props.title}</h3>
        <h3>Description is :{props.desc}</h3> 
        <h3>Written By:{props.author}</h3>
        <Link href={path}>
          <button>
            View
            </button> 
        </Link>

          {/* <button onClick={()=>handleClick(props.title)}>View</button> */}
        <button>Like</button>
      </div>
    </>
  );
}

export default BlogCard;
