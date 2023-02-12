import Link from "next/link";
import React from "react";
import { getSession } from "next-auth/react";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
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
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <nav className={styles.header}>
        <Link href="/blog">
          <h2>AllBlog</h2>
        </Link>
        <Link href="/animal">
          <h2>Animal</h2>
        </Link>
        <Link href="/plant">
          <h2>Plant</h2>
        </Link>
        <Link href="/bird">
          <h2>Bird</h2>
        </Link>
        <Link href="/counter-app">
          <h2>CounterApp</h2>
        </Link>
        {isAuth && (
          <Link href="/my-account">
            <h2>My Account</h2>
          </Link>
        )}
      </nav>
    </>
  );
}

export default Header;
