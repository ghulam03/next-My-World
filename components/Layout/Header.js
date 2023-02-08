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

      </nav>
    </>
  );
}

export default Header;
