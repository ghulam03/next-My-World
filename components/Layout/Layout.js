import React, { createContext, useEffect, useState } from "react";
import { addUser, un } from "../../store/userSlice";
import  {authUser, unAuthUser} from "./../../store/authSlice"
import { getSession, useSession } from "next-auth/react";

import Footer from "./Footer";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import Hero from "./Hero";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Layout(props) {


  // to update user state & auth state
  //redirect after sign in and signup
  const router=useRouter()
  const dispatch = useDispatch();
  const [email, setemail] = useState("default");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(authUser())
      console.log("auth state change to true")
      // router.push("/")
      // console.log("redirect to /after login")
      console.log("going to update state for user");
      setemail(session.user.email);
      console.log(email, "userE");

      fetch("/api/my-account/user/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("state user data which updated to state", data);
          dispatch(addUser(data));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    //change auth to false
    if(status==="unauthenticated"){
      dispatch(unAuthUser())
      console.log("auth state changed to false")
      // router.push("/auth/signup")
      // console.log("redirect to auth/signup after logout")
      
    }

    return () => {
      console.log("cleanup function for user state update");
    };
  }, [session, status, dispatch, email,router]);
//

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
