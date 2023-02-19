import React, { useState } from "react";

import EditPost from "../my-account/post/EditPost";
import Link from "next/link";
import styles from "./PostCard.module.css";
import { useSelector } from "react-redux";

function PostCard(props) {
  // console.log(props,"post-card prop");
  const path = `/post/${props.title}`;
  
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [isEditFormV, setisEditFormV] = useState(false);
  const email = useSelector((state) => state.user.email);
  const title=props.title

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
  fetch("/api/my-account/post/delete-post", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("post deleted", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


  

  return (
    <>
    {isAuth &&
            isSameUser &&
            isEditFormV && (
              <EditPost
                title={props.title}
                userId={props.userId}
                desc={props.desc}
                category={props.category}
              />
            )}
      <div className={styles.container}>
        <h3>Title is:{props.title}</h3>
        <h3>Description is :{props.desc}</h3>
        <h3>Category:{props.category}</h3>
        <h3>Written By:{props.userId}</h3>
        {/* <h3>Post id:{props.id}</h3> */}
        <Link href={path}>
          <button>View</button>
        </Link>
        {isAuth && isSameUser && !isEditFormV && (
            <button  onClick={showEditForm}>
              Edit Product
            </button>
          )}
        {isAuth && isSameUser && (
            <button onClick={deleteHandler}>Delete Product</button>
          )}

        {/* <button onClick={()=>handleClick(props.title)}>View</button> */}
        {isAuth && <button>Like</button>}
      </div>
    </>
  );
}

export default PostCard;
