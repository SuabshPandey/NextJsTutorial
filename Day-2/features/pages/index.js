import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home_div}>
      {/* <Navbar /> */}
      <h1>Home Page</h1>
    </div>
  );
}
