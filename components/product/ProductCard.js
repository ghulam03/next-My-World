import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css"

function ProductCard(props) {

    const path =`/product/${props.pcode}`
    
  return <>
  {
    <div className={styles.container}>
    <h3>Name is:{props.name}</h3>
    <h3>Description is :{props.desc}</h3>  <h3>Rating is:{props.rating}</h3>
    <h3>Category is: {props.category}</h3>
    <h3>Model is:{props.pcode}</h3>
    <Link href={path}> 
    <button>
        View
        </button>
        </Link>
    
    <button>Delete</button>
    
    
    </div>
  }
  </>;
}

export default ProductCard;
