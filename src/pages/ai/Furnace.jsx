import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_퍼니스시스템.png";
import styles from "./test.module.css";

export default function Furnace() {
  return (
    <>
      <Navbar />
      <img src={productImage} className={styles.test} alt="퍼니스시스템"></img>
    </>
  );
}
