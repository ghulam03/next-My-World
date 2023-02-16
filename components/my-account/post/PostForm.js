import React, { useState } from "react";

import styles from "./PostForm.module.css";
import { useSelector } from "react-redux";

function PostForm() {
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("default");
  const [desc, setdesc] = useState("default");
  const [id, setid] = useState(" defaut");
  const writer=useSelector((state)=>state.user.name)

  // const idd=uuidv4();
  // console.log(id,"id")
  // setid(idd)
  // import {  Prisma } from prisma/client'
  // const myRandomObjectID = Prisma.ObjectID().toString()

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, desc, id,writer}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("post data", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Write Your post</h2>
        </div>
        <div className={styles.fcont}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <input
              placeholder="unique"
                type="text"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>post ID</label>
              <input
                type="text"
                placeholder="unique"
                value={id}
                onChange={(e) => {
                  setid(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>Description</label>
              <textarea
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                value={desc}
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div>
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <button> Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostForm;
