import React from "react";
import styles from "./AnimalForm.module.css";
import { useState } from "react";

function AnimalForm() {
  const [name, setname] = useState("lion");
  const [desc, setdesc] = useState("lion is king");
  const [color, setcolor] = useState("yellow");
  const [age, setage] = useState(80);
  const [country, setcountry] = useState("india");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/my-account/add-animal", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, color, country, name,desc }),
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
      <h2> Animal addition Form</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
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
        <label>Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setcolor(e.target.value);
          }}
        ></input>
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => {
            setcountry(e.target.value);
          }}
        ></input>
        <button> Add Animal</button>
      </form>
    </>
  );
}

export default AnimalForm;
