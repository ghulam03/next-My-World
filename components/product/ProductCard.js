import Link from "next/link";
import React from "react";
import isAuthHandle from "../../utils/isAuth";
import styles from "./ProductCard.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
function ProductCard(props) {
  
  const isAuth=useSelector((state)=>state.auth.isAuth)
  const email=useSelector((state)=>state.user.email)
  // const [isSameUser, setisSameUser] = useState(false)

  //for login and same user for deletion
  let isSameUser=false
  if(props.userId===email){
    // setisSameUser(true)
     isSameUser=true
  }
  console.log(isSameUser)
function editHandler(){}

  
  const pcode=props.pcode
  function deleteHandler(){
    fetch("/api/my-account/product/delete-product", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pcode }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("product deleted", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }
  //for isAuth
  // const [isAuth, setisAuth] = useState(false);
  // async function authCall() {
  //   const isAuthh = await isAuthHandle();
  //   setisAuth(isAuthh);
  // }
  // authCall();
  //

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
          {isAuth && isSameUser && (<button disabled onClick={editHandler}>Edit Product</button>)}
          {isAuth && isSameUser && (<button onClick={deleteHandler}>Delete Product</button>)}
        </div>
      }
    </>
  );
}

export default ProductCard;
