import React from 'react'
import styles from "./SignUp.module.css"
function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <form className={styles.container}>
        <label>name</label>
        <input type="text"></input>
        <label>Age</label>
        <input type="number"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <label>Country</label>
        <input type="text"></input>
        <button> SignUp</button>
      </form>
    </>
  )
}

export default SignUp