import Link from "next/link";
import React from "react";
import { getSession } from "next-auth/react";
import styles from "./Header.module.css";
import { useState } from "react";
// import useSttore from "../../utils/store";

function Header() {
//   const user = useSttore((state) => state.user);
//   const addUser = useSttore((state) => state.addUser)

//  async function handleClick(){
  
//   console.log("state")
    
//   fetch("/api/auth/state", {
//     method: "GET", 
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("state:", data);
//       addUser(data)
//       console.log("state:", data);
//       console.log(user,"user")
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     })

// }
//  async function handleClick(){}

  
  const [isAuth, setisAuth] = useState(false);
  
  async function isAuthHandle() {
    const session = await getSession();
    console.log(session,"session")
    console.log(session.user.email,"session")
    if (session) {
      setisAuth(true);
    }
  }
  isAuthHandle();


  return (
    <>
    <div className={styles.mcontainer}>
      
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <nav className={styles.header}>
      <Link href="/product">
          <h2>All Product</h2>
        </Link>
        <Link href="/animal">
          <h2>All Animal</h2>
        </Link>
        <Link href="/plant">
          <h2>Plant</h2>
        </Link>
        <Link href="/bird">
          <h2>Bird</h2>
        </Link>
        <Link href="/blog">
          <h2>All Blog</h2>
        </Link>
        <Link href="/demo-app">
          <h2>Demo App</h2>
        </Link>
        {isAuth && (
          <Link href="/my-account">
            <button >My Account</button>
          </Link>
        )}
      </nav>
        </div>
    </>
  );
}

export default Header;
