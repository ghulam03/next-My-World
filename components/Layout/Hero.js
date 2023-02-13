import Link from "next/link";
import React from "react";
import { getSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react"
import styles from "./Hero.module.css";
import { useState } from "react";

function Hero() {
  const [isAuth, setisAuth] = useState(false)

  async function handle(){
    
    const session = await getSession()
    if(session){
        setisAuth(true)
    }}
    
    handle();
    console.log(isAuth)
      
    if(!isAuth){
      return (
        <>
          <main className={styles.container}>
            <h1 className={styles.logo}>LOGO</h1>
            <div className={styles.auth}>
              <button onClick={() => signIn()}>Sign in</button>
    
              <Link href="/auth/signup">
                <button className={styles.signup}> Signup</button>
              </Link>
              </div>
              </main>
              </>
              )
    }
    if(isAuth){
      return (
        <>
          <main className={styles.container}>
            <h1 className={styles.logo}>LOGO</h1>
            <div className={styles.auth}>
              <button onClick={() => signOut()}>Sign Out</button>
              </div></main></>)
    
    }

  }

  export default Hero;

    
  {/* return (
    <>
      <main className={styles.container}>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.auth}>
          <button onClick={() => signIn()}>Sign in</button>

          <Link href="/auth/signup">
            <h3>Signup</h3>
          </Link>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </main>
    </>
  ); */}


