import React from 'react'
import styles from "./AnimalForm.module.css"
function AnimalForm() {

  


  
  return (
    <>
    <h2>Add Animal</h2>
    <form className={styles.container} onSubmit={
      () => {console.log("first")}
    }>
        <label>name</label>
        <input type="text"></input>
        <label>Age</label>
        <input type="number"></input>
        <label>Color</label>
        <input type="text"></input>
        <label>Country</label>
        <input type="text"></input>
        <button> Add Animal</button>
      </form>
    
    </>
  )
}

export default AnimalForm