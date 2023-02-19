import Link from "next/link";
import { getSession } from "next-auth/react";
import styles from "../../styles/my-account.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Index() {
  const email = useSelector((state) => state.user.email);
  const id = useSelector((state) => state.user.id);
  const name = useSelector((state) => state.user.name);
  const password = useSelector((state) => state.user.password);
  const age = useSelector((state) => state.user.age);
  const country = useSelector((state) => state.user.country);

  const router = useRouter();

  const deleteHandler = async () => {
    const result = await fetch("/api/my-account/user/delete-user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await result.json();
    console.log("user deleted", data);
    router.push("/");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h1> My Profile</h1>
          <br></br>
          <h2>User ID: {id}</h2>
          <h2>Name: {name} </h2>
          <h2>Email: {email}</h2>
          <h2>Password : {password}</h2>
          <h2>Age :{age}</h2>
          <h2>Country : {country}</h2>
          <br></br>
          <br />
          <br></br>
          <Link href="/my-account/profile/edit-profile">
            <button>
              {/* onClick={editHandler}> */}
              Edit Profile
            </button>
            {/* <Link href="/my-account/profile/view-profile">
            <button>View Profile</button>
          </Link> */}
          </Link>
          <button onClick={deleteHandler}>Delete Account</button>
        </div>
        <div className={styles.center}>
          <div>
            <h1>Product</h1>
            <Link href="/my-account/product/add-product">
              <button>Add Product</button>
            </Link>
            <Link href="/my-account/product/view-product">
              <button>View Products</button>
            </Link>
          </div>
          <div>
            <h1>Cloth</h1>
            <Link href="/my-account/cloth/add-cloth">
              <button>Add Cloth</button>
            </Link>
            <Link href="/my-account/cloth/view-product">
              <button>View Cloth</button>
            </Link>
          </div>
          <div>
            <h1>Animal</h1>
            <Link href="/my-account/animal/add-animal">
              <button>Add Animal</button>
            </Link>
            <Link href="/my-account/animal/view-animal">
              <button>View Animals</button>
            </Link>
          </div>
          <div>
            <h1>Post</h1>
            <Link href="/my-account/post/add-post">
              <button>Add Post</button>
            </Link>
            <Link href="/my-account/post/view-post">
              <button>View Post</button>
            </Link>
          </div>
        </div>

        {/* <main>
      
      <h3>Email ID: {emaill}</h3>
      <h3>User Name:</h3>
      <h3>Age:</h3>
      <h3>Country:</h3>
    </main> */}
      </div>
    </>
  );
}
