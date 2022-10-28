import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <nav className={`${styles.nav_div}`}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/skills">
            <li>Skills</li>
          </Link>
          <Link href="/experience">
            <li>Experience</li>
          </Link>
          <Link href="/projects">
            <li>Porjects</li>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
