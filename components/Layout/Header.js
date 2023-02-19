import { useDispatch, useSelector } from "react-redux";

import { AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";
import React from "react";
import { getSession } from "next-auth/react";
import isAuthHandle from "../../utils/isAuth";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
    
  const isAuth =useSelector((state)=>state.auth.isAuth)
  const name=useSelector((state)=>state.user.name)
  
  //for isAuth
  // const [isAuth, setisAuth] = useState(false);
  // async function isAuthHandle() {
  //   const session = await getSession();
  //   console.log(session,"login-two")
  //   if (session) {
  //     setisAuth(true);
  //     // setemail(session.user.email)
  //   }
  // }
  // isAuthHandle();
  //
  //userStateAdd
  // const [email, setemail] = useState("default")
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
  //
//for icon context
//   color	undefined (inherit)	
// size	1em	
// className	undefined	
// style	undefined	Can overwrite size and color
// attr	undefined	Overwritten by other attributes
// title
//

  return (
    <>
      <div className={styles.cont}>
        <Link href="/">
          <div className={styles.home}>
          <IconContext.Provider value={{ 
            size:"50px",
            color:"brown",
            // style: { verticalAlign: 'left' }
         }}>
            
          <AiFillHome/>
          </IconContext.Provider>
            {/* </AiFillHome> */}
            {/* Home */}
            </div>
        </Link>
        {isAuth &&(<h2 className={styles.user}>{name}</h2>)}
        <nav className={styles.header}>
          <Link href="/product">
            <h2>All Product</h2>
          </Link>
          <Link href="/cloth">
            <h2>All Cloth</h2>
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
          <Link href="/post">
            <h2>All Post</h2>
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
