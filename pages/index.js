import { Router, useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import styles from "../styles/home.module.css";
import { useSelector } from "react-redux";
import useStoree from "../utils/store2";

export default function Index() {
  // const router = useRouter();
  // const isAuth=useSelector((state)=>state.auth.isAuth)
  
  
//   useEffect(() => {
//     if (isAuth) {
//       router.push("/product");
//       console.log("ue in homepage");
//     }
//   if (!isAuth) {
//     router.push("/");
//     console.log("ue in homepage");
//   }
//   return () => {
//     console.log("ret ue homepage");
//   };
// }, [isAuth,router]);

  // if (status === "authenticated") {
  //     setisAuth(true);
  //   }
  //   const { data: session, status } = useSession();
    

  // const session=getSession()
  // useEffect( () => {

  //   if(session){
  //    console.log("index page updating");
  //   }

  //   return () => {
  //     console.log("ue runn")
  //   }
  // }, [session])

  // use effect call
  // update user state

  // const router = useRouter();
  // const {session,status}=useSession()
  // console.log(router.pathname)
  // console.log(router.isReady)

  // async function getSesn() {
  //   const session = await getSession();

  //   console.log(session);
  // }
  // const session = getSesn();
  //  const session =  getSession();
  // useEffect(() => {
  //   if (status=="loading") {
  //     // router.push("http://localhost:3000");
  //     router.push("/product");
  //     console.log("indexp")
  //   }
  // }, [status, router]);

  // const bears = useStoree((state) => state.bears);

  return (
    <>
      <div className={styles.mcontainer}>
        <main className={styles.container}>
          <h1>Our Home page</h1>
        </main>
        <div className={styles.tcontain}>
          {/* <h2>FOR DEMO</h2> */}
          {/* <h4>Current bear no is {bears}</h4> */}
          <h2>About Us</h2>
          <p>
            Laboris consectetur proident et non reprehenderit cupidatat
            reprehenderit culpa dolore dolor culpa. Cillum proident sint enim
            Lorem cillum adipisicing consequat et in consequat adipisicing
            magna. Non cupidatat ullamco dolor aliqua ad sint aliquip. Deserunt
            commodo ea irure ullamco duis ullamco aute labore qui mollit do
            Lorem nisi. qui quis laboris adipisicing cupidatat cupidatat aliquip
            ea consequat. tempor.
          </p>
        </div>
      </div>
    </>
  );
}
