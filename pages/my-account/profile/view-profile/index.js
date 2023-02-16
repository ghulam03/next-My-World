import { useContext, useState } from "react";

import getEmailId from "../../../../utils/getEmId";
import styles from "../../../../styles/viewProfile.module.css";
import { useSelector } from "react-redux";

export default function Index() {


  const id=  useSelector((state)=>state.user.id)
  const name=  useSelector((state)=>state.user.name)
  const emaill=  useSelector((state)=>state.user.email)
  const password=  useSelector((state)=>state.user.password)
  const age=  useSelector((state)=>state.user.age)
  const country=  useSelector((state)=>state.user.country)

  
  

  // const usero = useContext(AuthContext)

  const [email, setemail] = useState("no user");
  const [user, setuser] = useState({});
  const [isShow, setisShow] = useState(false);
  const [isSVB, setisSVB] = useState(true);
  
  async function random() {
    const emaill = await getEmailId();
    setemail(emaill);
  }
  random();
  async function handleClick() {

    const response = await fetch("/api/auth/get-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data, "user");
    setuser({ ...data });
    setisShow(true);
  }
  function handleDivClick() {
    setisSVB(false);
  }

  return (
    <>
    <div className={styles.cont}>
      

      <h2 className={styles.name}>{name}</h2>
      <div>
        
      
      <h2>User ID:{id}</h2>
      <h2>Name:{name}</h2>
      <h2>Email:{emaill}</h2>
      <h2>Password:{password}</h2>
      <h2>Age:{age} years.</h2>
      <h2>Country:{country}</h2>
      </div>
      
      <div onClick={handleDivClick}>
        {isSVB && <button onClick={handleClick}>Tap to See Details</button>}
      </div>
      {isShow && (
        <div className={styles.cont}>
          <h3>Name:{user.name}</h3>
          <h3>Password:{user.password}</h3>
          <h3>Age:{user.age}</h3>
          <h3>Country:{user.country}</h3>
        </div>
      )}
          </div>
    </>
  );
}
