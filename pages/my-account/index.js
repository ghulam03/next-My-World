import Link from "next/link";
import { getSession } from "next-auth/react";
import styles from "../../styles/my-account.module.css";
import { useState } from "react";

export default function Index() {

  
  const [email, setemail] = useState("test@test");

  async function isAuthHandle() {
    const session = await getSession();
    // console.log(session, "session");
    // console.log(session.user.email, "session");
    if (session) {
      setemail(session.user.email);
    }
  }

  isAuthHandle();
  return (
    <>
      <div className={styles.container}>
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
        <div>
          <h1>Profile</h1>
          <Link href="/my-account/profile/view-profile">
            <button>View Profile</button>
          </Link>
          <button disabled>Edit Profile</button>
        </div>
        
        
    <main>
      
      <h3>Email ID: {email}</h3>
      <h3>User Name:</h3>
      <h3>Age:</h3>
      <h3>Country:</h3>
    </main>
      </div>
    </>
  );
}
