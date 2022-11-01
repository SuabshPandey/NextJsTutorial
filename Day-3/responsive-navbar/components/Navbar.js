import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.header_content}>
        <h2 className={styles.header_content_logo}>
          <Link href="/">Portfolio</Link>
        </h2>

        <nav
          className={`${styles.header_content_nav} ${
            menuOpen ? styles.isMenu : ""
          } `}
        >
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header_content_toggle}>
          {!menuOpen ? (
            <AiOutlineBars onClick={toggleHandler} />
          ) : (
            <AiOutlineClose onClick={toggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
