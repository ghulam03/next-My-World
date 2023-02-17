import Link from "next/link";
import React from "react";
import isAuthHandle from "../../utils/isAuth";
import styles from "./ProductCard.module.css";
import { useState } from "react";
function ProductCard(props) {
  
  const [isAuth, setisAuth] = useState(false);
  async function authCall() {
    const isAuthh = await isAuthHandle();
    setisAuth(isAuthh);
  }
  authCall();

  const path = `/product/${props.pcode}`;

  return (
    <>
      {
        <div className={styles.container}>
          <h3>Title is:{props.title}</h3>
          <h3>Price is:{props.price}</h3>
          <h3>Description is :{props.desc}</h3>{" "}
          <h3>Rating is:{props.rating}</h3>
          <h3>Posted By:{props.userId}</h3>
          <h3>Product Code is:{props.pcode}</h3>
          <Link href={path}>
            <button>View</button>
          </Link>
          {isAuth && (<button>Add To Cart</button>)}
        </div>
      }
    </>
  );
}

export default ProductCard;
