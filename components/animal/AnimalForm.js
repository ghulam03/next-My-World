import React from "react";
import styles from "./AnimalForm.module.css";
import { useState } from "react";

function AnimalForm() {
  const [aname, setaname] = useState("lion");
  const [aage, setaage] = useState(50);
  const [acolor, setacolor] = useState("blue");
  const [acountry, setacountry] = useState("india");
  // const data = { aname, aage, acolor, acountry };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(aage, acolor, acountry);

    fetch("/api/animal", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aage, acolor, acountry, aname }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <p>You are adding : 
      {acolor} {aname} who is {aage} years old live in {acountry}
      </p>
      <h2>Add Animal</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={aname}
          onChange={(e) => {
            setaname(e.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={aage}
          onChange={(e) => {
            setaage(e.target.value);
          }}
        ></input>
        <label>Color</label>
        <input
          type="text"
          value={acolor}
          onChange={(e) => {
            setacolor(e.target.value);
          }}
        ></input>
        <label>Country</label>
        <input
          type="text"
          value={acountry}
          onChange={(e) => {
            setacountry(e.target.value);
          }}
        ></input>
        <button> Add Animal</button>
      </form>
    </>
  );
}

export default AnimalForm;
