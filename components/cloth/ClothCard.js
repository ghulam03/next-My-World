import EditCloth from "../my-account/cloth/EditCloth";
import Link from "next/link";
import React from "react";
import isAuthHandle from "../../utils/isAuth";
import styles from "./ClothCard.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

function ClothCard(props) {
  const router=useRouter()

  const title = props.title;
  const price = props.price;
  const desc = props.desc;
  const rating = props.rating;
  const ccode = props.ccode;

  const [isEditFormV, setisEditFormV] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const email = useSelector((state) => state.user.email);

  //for login and same user for deletion
  let isSameUser = false;
  if (props.userId === email) {
    isSameUser = true;
  }
  // console.log(isSameUser);
 
function showEditForm(){
  setisEditFormV(true)
}
  function deleteHandler() {
    fetch("/api/my-account/cloth/delete-cloth", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("cloth deleted", data);
        router.push('/post')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  

  const path = `/cloth/${props.ccode}`;

  return (
    <>
          {isAuth &&
            isSameUser &&
            isEditFormV && (
              <EditCloth
                title={title}
                price={price}
                desc={desc}
                rating={rating}
                ccode={ccode}
              />
            )}
      {
        <div className={styles.container}>
          <h3>Title is:{props.title}</h3>
          <h3>Price is:{props.price}</h3>
          <h3>Description is :{props.desc}</h3>{" "}
          <h3>Rating is:{props.rating}</h3>
          <h3>Posted By:{props.userId}</h3>
          <h3>Cloth Code is:{props.ccode}</h3>
          <Link href={path}>
            <button>View</button>
          </Link>
          {isAuth && <button>Add To Cart</button>}
          {isAuth && isSameUser && !isEditFormV && (
            <button  onClick={showEditForm}>
              Edit Cloth
            </button>
          )}
          {isAuth && isSameUser && (
            <button onClick={deleteHandler}>Delete Cloth</button>
          )}
        </div>
      }
    </>
  );
}

export default ClothCard;
