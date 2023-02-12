import React from "react";
import styles from "./BlogForm.module.css"
import { useState } from "react";

function BlogForm() {
  const [title, settitle] = useState("default");
  const [author, setauthor] = useState("default");
  const [desc, setdesc] = useState("default");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("before api")

    fetch("/api/my-account", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, desc }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      console.log("after api")
  }

  return (
    <>
      <h2>Add Blog</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <label>description</label>
        <textarea
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          value={desc}
          rows="4"
          cols="50"
        ></textarea>
        <label>Title</label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setauthor(e.target.value);
          }}
        ></input>

        <button> Add Blog</button>
      </form>
    </>
  );
}

export default BlogForm;
