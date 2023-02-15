import { getSession, useSession } from "next-auth/react";

import styles from "../styles/home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useStoree from "../utils/store2";

export default function Index() {
  const bears = useStoree((state) => state.bears);
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


  return (
    <>
      <div className={styles.mcontainer}>
        <main className={styles.container}>
          <h1>Our Home page</h1>
        </main>
        <div className={styles.tcontain}>
          <h4>Current bear no is {bears}</h4>
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
