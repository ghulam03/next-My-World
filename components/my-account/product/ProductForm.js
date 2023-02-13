import React from "react";
import styles from "./ProductForm.module.css";
import { useState } from "react";

function ProductForm() {
  const [name, setname] = useState("cap");
  const [pcode, setpcode] = useState("unique");
  const [desc, setdesc] = useState("cap is good");
  const [rating, setrating] = useState(5);
  const [category, setcategory] = useState("clothes");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/add-product", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, pcode,desc,rating,category }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("prod", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <h2> Product Addition Form</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <label>Product Code</label>
        <input
          type="text"
          value={pcode}
          onChange={(e) => {
            setpcode(e.target.value);
          }}
        ></input>
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
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => {
            setrating(e.target.value);
          }}
        ></input>
        <button> Add Product</button>
      </form>
    </>
  );
}

export default ProductForm;
