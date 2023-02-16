import React, { createContext, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import Hero from "./Hero";
import { getSession } from "next-auth/react";

function Layout(props) {
  const [isAuth, setisAuth] = useState(false);
  const [email, setemail] = useState("default")
  const [usero, setusero] = useState({
    id: 0,
    name: "adil",
    email:"default@default",
    password:"def",
    age:10,
    country:"india"
  });
  // const AuthContext = createContext({});
  async function isAuthHandle() {
    const session = await getSession();
    console.log(session,"login");
    if (session) {
      setisAuth(true);
      // setemail(session.user.email);
    }
  }

  isAuthHandle();
  // if(isAuth){
    
  //  ( async ()=> {
  //     console.log("user info get")
  //       const data=await fetch("api/auth/get-user",{
  //     method:"POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //   const user=await data.json()
  //   setusero(user)
  //   console.log(user,'st user')
      
  //   })()

  // if(isAuth){
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
  // setusero(user)
  // console.log(user,'st user')
    
  // }
// userStateAdd()
// }
// if(!isAuth){
  // setuser({  
  //   id: 0,
  //   name: "adil",
  //   email:"default@default",
  //   password:"def",
  //   age:10,
  //   country:"india"
  // })
    
  // }
  


  return (
    <>
      {/* <AuthContext.Provider value={usero}> */}
        <Hero />
        <Header />
        <HeaderTwo />
        <main>{props.children}</main>
        <Footer />
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default Layout;
