import React, { useState } from "react";

import styles from "./SignUp.module.css";

function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(10);
  const [country, setcountry] = useState("");
  const [password, setpassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(aage, acolor, acountry);

    fetch("/api/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, email, country, name, password }),
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
          <p>this is my signup details</p>
      <div className={styles.container}>
        <div>
          <p>
            {name}is {age} years old.
          </p>
          <p>
            he live in{country}.<p>.this is his password {password}</p>
          </p>
          <p>his/her email is {email}.</p>
        </div>
      <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          ></input>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setage(e.target.value)}
          ></input>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          ></input>
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setcountry(e.target.value)}
          ></input>
        <button> SignUp</button>
      </form>
          </div>
    </>
  );
}

export default SignUp;


