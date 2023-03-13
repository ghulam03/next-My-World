import React, { useState } from "react";

import styles from "./SignUp.module.css";
import { useRouter } from "next/router";

function SignUp() {
  const router=useRouter()
  
  const [id, setid] = useState("unique")
  const [name, setname] = useState("Abid");
  const [email, setemail] = useState("unique@unique");
  const [age, setage] = useState(10);
  const [country, setcountry] = useState("India");
  const [password, setpassword] = useState("12345");
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/auth/sign-up", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, email, country, name, password,id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user signup details", data)
        router.push("/auth/post-signup");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
        <h2 className={styles.title}>SignUp Here!</h2>
      {/* <div className={styles.container}> */}
        <form className={styles.formcontainer} onSubmit={handleSubmit}>
          <label>User ID</label>
        <input
            type="text"
            value={id}
            onChange={(e) => setid(e.target.value)}
          ></input>
            <label>Name</label>
       
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setage(e.target.value)}
          ></input>
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          ></input>
          <button>SignUp</button>
        </form>
      {/* </div> */}
    </>
  );
}

export default SignUp;
