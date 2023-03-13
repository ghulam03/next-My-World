import React, { useState } from "react";

import styles from "./PostForm.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function PostForm() {
  const router=useRouter()
  const userId = useSelector((state) => state.user.email);

  const id = uuidv4();
  // console.log("id ", id);

  const [title, settitle] = useState("unique");
  const [category, setcategory] = useState("nature");
  const [desc, setdesc] = useState("this is good post");


  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/post/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, userId, desc, id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("post added details", data);
        router.push('/post')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      {/* <div className={styles.container}> */}
          <h2 className={styles.title}>Write Your Post</h2>
        {/* <div className={styles.fcont}> */}
          <form className={styles.formcontainer} onSubmit={handleSubmit}>
            {/* <div> */}
              <label>Title</label>
              <input
                placeholder="unique"
                type="text"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              ></input>
            {/* </div> */}
            
            {/* <div> */}
              <label>Description</label>
              <textarea
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                value={desc}
                rows="4"
                cols="50"
              ></textarea>
            {/* </div> */}
            {/* <div> */}
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              ></input>
            {/* </div> */}
            {/* <div> */}
              <button> Add Post</button>
            {/* </div> */}
          </form>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default PostForm;
