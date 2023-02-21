import React from "react";
import styles from "./HeaderTwo.module.css";
import { useSelector } from "react-redux";

function HeaderTwo() {
  const isAuth =useSelector((state)=>state.auth.isAuth)
  const name=useSelector((state)=>state.user.name)
    
  return (
    <>
      <div className={styles.cont}>
        
        <h1>HeaderTwo</h1>
        <div>
          
        {isAuth && (<h1 className={styles.user}> {name}</h1>)}
        </div>
       
      </div>
    </>
  );
}

export default HeaderTwo;
