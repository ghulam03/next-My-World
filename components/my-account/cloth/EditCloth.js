import React, { useState } from "react";

import styles from "./EditCloth.module.css";
import { useRouter } from "next/router";

function EditCloth(props) {
    //   const userId = useSelector((state) => state.user.email);
  const router = useRouter();
  const ccode=props.ccode
  const titlee=props.title
  const pricee=props.price
  const descc=props.desc
  const ratingg=props.rating
  
  const [title, settitle] = useState(titlee);
  const [price, setprice] = useState(pricee);
  const [desc, setdesc] = useState(descc);
  const [rating, setrating] = useState(ratingg);

  
  const editHandel = async (e) => {
    e.preventDefault();

    const data = await fetch("/api/my-account/cloth/edit-cloth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode,title, price, desc, rating }),
    });

    const result = await data.json();
    console.log("edited cloth",result)
    router.push("/cloth")
  };
  

  return (
    <>
    {/* <div className={styles.container} > */}
        
   
      <h2 className={styles.title}> Edit Cloth!</h2>
      <form className={styles.formcontainer}
      onSubmit={editHandel}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <label>Cloth Code</label>
        <input disabled type="text" value={ccode}></input>
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
        <button> Edit Cloth</button>
      </form>
      {/* </div> */}
    </>
  );
}

export default EditCloth;
