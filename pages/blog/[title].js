import styles from "../../styles/blogTitle.module.css"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Title() {
  const router = useRouter();
  console.log(router);
  const title = router.query.title;

  const [blog, setblog] = useState({})
  function clickHandle(){
    
      
      fetch("/api/blog/[title]", {
          method: "PUT", 
          headers: {
              "Content-Type": "application/json",
            },      body: JSON.stringify({ title}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("title:", data);
            setblog({...data})
        })
        .catch((error) => {
            console.error("Error:", error);
        });
        
    }
  
  
  return (
    <>
      <button onClick={clickHandle}>tap to see </button>
      <div className={styles.container}>
      <p> Blog Title is:{blog.title}</p>
      <p>Blog Description: {blog.desc}</p>
      <p>Blog Author:{blog.author}</p>
        
      </div>
    </>
  );
}
