import React, { createContext, useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";

import Footer from "./Footer";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import Hero from "./Hero";
import { addUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

function Layout(props) {
  const dispatch = useDispatch();

  const [email, setemail] = useState("default");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("user state update");
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
          console.log("user data", data);
          dispatch(addUser(data));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    return () => {
      console.log("ret user state update");
    };
  }, [session, status, dispatch, email]);

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
