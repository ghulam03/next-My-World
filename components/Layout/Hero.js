import { GiPlantRoots, GiPlantWatering } from "react-icons/gi";
import React, { useState } from "react";
import { getSession, signIn, signOut } from "next-auth/react";

import { IconContext } from "react-icons";
import Link from "next/link";
import styles from "./Hero.module.css";
import { useSelector } from "react-redux";

function Hero() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return (
      <>
        <main className={styles.container}>
          <div className={styles.logo}>
            <IconContext.Provider
              value={{
                size: "120px",
                color: "brown",
              }}
            >
              <GiPlantWatering />
              {/* <GiPlantRoots/> */}
            </IconContext.Provider>
            {/* LOGO */}
          </div>
          <div className={styles.auth}>
            {/* <div> */}
            <button
              onClick={() =>
                // {signIn( "credentials",{ callbackUrl: 'http://localhost:3000' })}
                signIn()
              }
              // () => userSignin()
            >
              Sign in
            </button>
            {/* </div> */}

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
          {/* <h1 className={styles.logo}>LOGO</h1> */}
          <div className={styles.logo}>
            <IconContext.Provider
              value={{
                size: "120px",
                color: "brown",
              }}
            >
              <GiPlantWatering />
              {/* <GiPlantRoots/> */}
            </IconContext.Provider>
            {/* LOGO */}
          </div>
          <div className={styles.auth}>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
            {/* <button onClick={() => uuserSignout()}>Sign Out</button> */}
            {/* <button onClick={signOut}>Sign Out</button> */}
          </div>
        </main>
      </>
    );
  }
}

export default Hero;

//for ExtSignout
// const extSignOut = () => {
//   console.log("extH signOut");
// };
//
//for ExtSignIn
// function extSignIn() {
//   console.log("extH SignIn");
// }
//
//SignOut
// window.location.replace("http://localhost:3000/auth/signout");
// const  userSignout= async ()=> {
//   console.log("signinfout");
//   const rst=await signOut();
//   console.log("signO");
// }
//for Signout
//   const  uuserSignout=  ()=> {
//     console.log("signinfout");
//     const rst= signOut();
// window.location.replace("http://localhost:3000/auth/signout");
//     console.log("signO");
//   }
//
//SignIn
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
