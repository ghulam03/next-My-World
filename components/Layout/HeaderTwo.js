import React from "react";
import styles from "./HeaderTwo.module.css";
import { useSelector } from "react-redux";

function HeaderTwo() {
    const val = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.user.name);
    // const user="default"
    
  return (
    <>
      <div className={styles.cont}>
        <h2>HeaderTwo</h2>
        <h3>Value is:{val}</h3>
        <h3>User is:{name}</h3>
        {/* <h2>User is:{user?user:"default"}</h2> */}
      </div>
    </>
  );
}

export default HeaderTwo;
