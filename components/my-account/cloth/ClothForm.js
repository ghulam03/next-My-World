import React from "react";
import styles from "./ClothForm.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ClothForm() {
  const userId=useSelector((state)=>state.user.email)
  const [title, settitle] = useState("shirt");
  const [price, setprice] = useState(100)
  const [ccode, setccode] = useState("unique");
  const [desc, setdesc] = useState("shirt is good");
  const [rating, setrating] = useState(3);
  // const [category, setcategory] = useState("clothes");
  
  const id=uuidv4();
  console.log("id ",id) // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/cloth/add-cloth", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId,title,price, ccode,desc,rating,id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("prod added", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <h2> Cloth Addition Form</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <label>Cloth Code</label>
        <input
          type="text"
          value={ccode}
          onChange={(e) => {
            setccode(e.target.value);
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
        <button> Add Cloth</button>
      </form>
    </>
  );
}

export default ClothForm;
