import React from "react";
import styles from "./ProductForm.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ProductForm() {
  const router=useRouter()
  const userId=useSelector((state)=>state.user.email)
  const [title, settitle] = useState("cap");
  const [price, setprice] = useState(10)
  const [pcode, setpcode] = useState("unique");
  const [desc, setdesc] = useState("cap is good");
  const [rating, setrating] = useState(5);
  
  const id=uuidv4();
  // console.log("id ",id) // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/product/add-product", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId,title,price, pcode,desc,rating,id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("prod added details", data);
        router.push('/my-account')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <h2 className={styles.title}> Add Product!</h2>
      <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
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
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
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
