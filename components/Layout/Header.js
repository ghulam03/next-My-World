import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <nav className={styles.header}>
      <Link href="/">
          <h2>Home</h2>
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
        <Link href="/users">
          <h2>User List</h2>
        </Link>
        <Link href="/api-check">
          <h2>check your api here</h2>
        </Link>

      </nav>
    </>
  );
}

export default Header;
