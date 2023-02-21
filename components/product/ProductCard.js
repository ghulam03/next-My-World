import React, { useEffect } from "react";

import EditProduct from "../my-account/product/EditProduct";
import Link from "next/link";
import isAuthHandle from "../../utils/isAuth";
import styles from "./ProductCard.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

function ProductCard(props) {
  // const [isSameUser, setisSameUser] = useState(false)
  // setisSameUser(true)

//   useEffect(()=>{
// if(isEditFormV){
//   setisEditFormV(false)
// }
  
//   return ()=>{
//     console.log("ret ue for edit form ")
//   }}
//   ,[isEditFormV])

  const router=useRouter()

  const title = props.title;
  const price = props.price;
  const desc = props.desc;
  const rating = props.rating;
  const pcode = props.pcode;

  const [isEditFormV, setisEditFormV] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const email = useSelector((state) => state.user.email);

  //for login and same user for deletion
  let isSameUser = false;
  if (props.userId === email) {
    isSameUser = true;
  }
  console.log(isSameUser);
 
function showEditForm(){
  setisEditFormV(true)
}
  function deleteHandler() {
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
        router.push('/product')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }

  const path = `/product/${props.pcode}`;

  return (
    <>
          {isAuth &&
            isSameUser &&
            isEditFormV && (
              <EditProduct
              
                title={title}
                price={price}
                desc={desc}
                rating={rating}
                pcode={pcode}
              />
            )}
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
          {isAuth && <button>Add To Cart</button>}
          {isAuth && isSameUser && !isEditFormV && (
            <button  onClick={showEditForm}>
              Edit Product
            </button>
          )}
          {isAuth && isSameUser && (
            <button onClick={deleteHandler}>Delete Product</button>
          )}
        </div>
      }
    </>
  );
}

export default ProductCard;
