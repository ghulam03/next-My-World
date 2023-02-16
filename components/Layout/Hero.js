import React, { useState } from "react";
import { getSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";
import styles from "./Hero.module.css";

function Hero() {
  const [isAuth, setisAuth] = useState(false);

  async function isAuthHandle() {
    const session = await getSession();
    if (session) {
      setisAuth(true);
    }
  }

  isAuthHandle();

  const  userSignout= async ()=> {
    console.log("signinfout");
    const rst=await signOut();
    window.location.replace("http://localhost:3000/auth/signout");
    console.log("signO");
  }

//   const userSignin = async () => {
//     console.log("sign run")
//     const result = await signIn();
//     console.log("sign run")
//     const session = await getSession();
//     console.log("sign run")
//     const email=session.user.email
//   console.log(session.user.email,"signikln ")
//   const data=await fetch("api/auth/get-user",{
//     method:"POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email }),
//   })
//   const user=await data.json()
//   console.log(user,'st user')

// }
// const userSignin = async () => {
//   const result = await signIn();
//   // window.location.assign("http://localhost:3000")

// }

  if (!isAuth) {
    return (
      <>
        <main className={styles.container}>
          <h1 className={styles.logo}>LOGO</h1>
          <div className={styles.auth}>
            <button onClick=
            // {signIn( "credentials",{ callbackUrl: 'http://localhost:3000' })}
            {() => signIn()}
              // () => userSignin()
              >Sign in</button>

            <Link href="/auth/signup">
              <button className={styles.signup}> Signup</button>
            </Link>
          </div>
        </main>
      </>
    );
  }
  if (isAuth) {
    return (
      <>
        <main className={styles.container}>
          <h1 className={styles.logo}>LOGO</h1>
          <div
            className={styles.auth}
            // onClick={signnOut}
          >
            <button onClick={() => userSignout()}>Sign Out</button>
            {/* <button onClick={() => {
                signOut()
                console.log("signo")
                window.location.replace("http://localhost:3000")
                }}>Sign Out</button> */}
            {/* <button onClick={signOut}>Sign Out</button> */}
          </div>
        </main>
      </>
    );
  }
}

export default Hero;

{
  /* return (
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
  ); */
}
