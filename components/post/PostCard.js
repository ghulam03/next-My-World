import Link from "next/link";
import React from "react";
import styles from "./PostCard.module.css";
function PostCard(props) {
  // console.log(props,"post-card prop");

  const path = `/post/${props.title}`;

  //  function handleClick(title){
  //   console.log("post view",title)

  //   }

  return (
    <>
      <div className={styles.container}>
        <h3>Title is:{props.title}</h3>
        <h3>Description is :{props.desc}</h3>
        <h3>Category:{props.category}</h3>
        <h3>Written By:{props.writer}</h3>
        {/* <h3>Post id:{props.id}</h3> */}
        <Link href={path}>
          <button>View</button>
        </Link>

        {/* <button onClick={()=>handleClick(props.title)}>View</button> */}
        <button>Like</button>
      </div>
    </>
  );
}

export default PostCard;
