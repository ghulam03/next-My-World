import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import React from "react";

function Layout(props) {
  return (
    <>
      <Hero />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
