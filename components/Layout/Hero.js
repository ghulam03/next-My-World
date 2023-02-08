import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.auth}>
          <Link href="/auth/login">
            <h3>Login</h3>
          </Link>
          <Link href="/auth/signup">
            <h3>Signup</h3>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;
