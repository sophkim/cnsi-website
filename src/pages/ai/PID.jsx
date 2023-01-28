import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_PID도면해석.png";
import styles from "./ai.module.css";

export default function PID() {
  return (
    <>
      <Navbar />
      <img src={productImage} className={styles.img} alt="PID 도면해석"></img>
    </>
  );
}
