import React, { useState } from "react";

import styles from "./SignUp.module.css";

function SignUp() {
  const [name, setname] = useState("Abid");
  const [email, setemail] = useState("test@test");
  const [age, setage] = useState(10);
  const [country, setcountry] = useState("India");
  const [password, setpassword] = useState("12345");
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/users", {
      method: "POST", 
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
    
      <p>

        My name is {name}.I am {age} years old.My  email is {email}. I live
        in {country}.My password is {password}
      </p>

      <div className={styles.container}>
        <form className={styles.formcontainer} onSubmit={handleSubmit}>
          <label>name</label>
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
            type="password"
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
