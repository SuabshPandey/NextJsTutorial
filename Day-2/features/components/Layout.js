import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  console.log("Children Property", children);
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
