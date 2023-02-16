import React from "react";
import styles from "./BlogForm.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function BlogForm() {
  const [title, settitle] = useState("default");
  const [category, setcategory] = useState("default");
  const [desc, setdesc] = useState("default");
  const [id, setid] = useState(" defaut")
  // const idd=uuidv4(); 
  // console.log(id,"id")
  // setid(idd)
  // const [authorId, setauthorId] = useState("default")
  
  // import {  Prisma } from prisma/client'
  // const myRandomObjectID = Prisma.ObjectID().toString()

  function handleSubmit(e) {
    e.preventDefault();
    console.log("before api");

    fetch("/api/my-account/add-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, desc,id}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success blog:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("after api");
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Write Your Blog</h2>
        </div>
        <div className={styles.fcont}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>Blog ID</label>
              <input
                type="text"
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
            <button> Add Blog</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogForm;
