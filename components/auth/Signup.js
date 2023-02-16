import React, { useState } from "react";

import styles from "./SignUp.module.css";

function SignUp() {
  const [id, setid] = useState("default")
  const [name, setname] = useState("Abid");
  const [email, setemail] = useState("test@test");
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
        console.log("user signup", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
    
      <p>

        My name is {name}.I am {age} years old.My  email is {email}. I live
        in {country}.My password is {password}.My id is{id}
      </p>

      <div className={styles.container}>
        <form className={styles.formcontainer} onSubmit={handleSubmit}>
        <input
            type="text"
            value={id}
            onChange={(e) => setid(e.target.value)}
          ></input>
           <label>User ID</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
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
          <button> SignUp</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
