import React, { useState } from "react";

import styles from "./EditProduct.module.css";
import { useRouter } from "next/router";

function EditProduct(props) {
  const router = useRouter();
  const pcode = props.pcode;
  const titlee = props.title;
  const pricee = props.price;
  const descc = props.desc;
  const ratingg = props.rating;

  const [title, settitle] = useState(titlee);
  const [price, setprice] = useState(pricee);
  const [desc, setdesc] = useState(descc);
  const [rating, setrating] = useState(ratingg);

  const editHandel = async (e) => {
    e.preventDefault();

    const data = await fetch("/api/my-account/product/edit-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pcode, title, price, desc, rating }),
    });

    const result = await data.json();
    console.log("edited product", result);
    router.push("/product");
  };

  return (
    <>
      {/* <div className={styles.container}> */}
        <h2 className={styles.title}> Edit Product</h2>
        <form className={styles.formcontainer} onSubmit={editHandel}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          ></input>
          <label>Product Code</label>
          <input disabled type="text" value={pcode}></input>
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
          <button> Edit Product</button>
        </form>
      {/* </div> */}
    </>
  );
}

export default EditProduct;
