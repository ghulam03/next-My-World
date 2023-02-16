import Link from "next/link";
import React from "react";
import { getSession } from "next-auth/react";
import isAuthHandle from "../../utils/isAuth";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

// const isAuth = isAuthHandle();

function Header() {
  const [isAuth, setisAuth] = useState(false);
  // const dispatch=useDispatch()
// const [email, setemail] = useState("default")

  async function isAuthHandle() {
    const session = await getSession();
    console.log(session,"login-two")
    if (session) {
      setisAuth(true);
      // setemail(session.user.email)
    }
  }

  isAuthHandle();
  
  // async function userStateAdd() {
  //   console.log("user info get")
  //     const data=await fetch("api/auth/get-user",{
  //   method:"POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email }),
  // })
  // const user=await data.json()
  // console.log(user,'st user')
  // dispatch({type:"addUser",payload:user})
    
    
    
  // }
  // console.log(email)

  return (
    <>
      <div className={styles.mcontainer}>
        <Link href="/">
          <h2 className={styles.home}>Home</h2>
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
            <Link href="/my-account/cart">
              <button>My Cart</button>
            </Link>
          )}
          {isAuth && (
            <Link href="/my-account">
              <button 
              // onClick={userStateAdd}
              >My Account</button>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
