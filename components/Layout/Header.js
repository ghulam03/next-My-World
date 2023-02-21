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
  const isAuth = useSelector((state) => state.auth.isAuth);

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
        <nav className={styles.header}>
          <div className={styles.home}>
            <Link href="/">
              <IconContext.Provider
                value={{
                  size: "50px",
                  // color:""
                  // style: { verticalAlign: 'left' }
                }}
              >
                <AiFillHome />
              </IconContext.Provider>
              {/* </AiFillHome> */}
              {/* Home */}
            </Link>
          </div>
          <Link href="/product">
            <h2>All Product</h2>
          </Link>
          <Link href="/cloth">
            <h2>All Cloth</h2>
          </Link>
          <Link href="/post">
            <h2>All Post</h2>
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
          <Link href="/demo-app">
            <h2>Demo App</h2>
          </Link>
          <Link href="/about">
            <h2>About Us</h2>
          </Link>
          {isAuth && (
            <Link href="/my-account/cart">
              <button>My Cart</button>
            </Link>
          )}
          {isAuth && (
            <Link href="/my-account">
              <button>My Account</button>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
