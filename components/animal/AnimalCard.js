import React from "react";
import styles from "./AnimalCard.module.css"

function AnimalCard(props) {
    
  return <>
  {
    <div className={styles.container}>
    <h3>Name is:{props.name}</h3>
    <h3>Description is :{props.desc}</h3>  <h3>Color is:{props.color}</h3>
    <h3>age is: {props.age}</h3>
    <h3>live in:{props.country}</h3>
    
    </div>
  }
  </>;
}

export default AnimalCard;
