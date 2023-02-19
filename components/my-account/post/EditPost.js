import React, { useState } from "react";

import styles from "./EditPost.module.css";
import { useRouter } from "next/router";

function EditPost(props) {
  //   const userId = useSelector((state) => state.user.email);
  const router = useRouter();
  const title = props.title;
  const userId = props.userId;
  const descc = props.desc;
  const categoryy = props.category;

  // const [title, settitle] = useState(titlee);

  const [category, setcategory] = useState(categoryy);
  const [desc, setdesc] = useState(descc);

  const editHandel = async (e) => {
    e.preventDefault();

    const data = await fetch("/api/my-account/post/edit-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, desc, category }),
    });

    const result = await data.json();
    console.log("edited post", result);
    router.push("/post");
  };

  return (
    <>
      <div className={styles.container}>
        <h2> Edit Post</h2>
        <form onSubmit={editHandel}>
          <label>Title</label>
          <input type="text" value={title} disabled></input>
         
          <label>Description</label>
          <textarea
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            value={desc}
            rows="4"
            cols="50"
          ></textarea>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          ></input>
          <label>Written By</label>
          <input type="text" value={userId} disabled></input>
          <button> Edit Post</button>
        </form>
      </div>
    </>
  );
}

export default EditPost;
