import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import React from "react";

function Layout(props) {
  return (
    <>
      <Logo />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
