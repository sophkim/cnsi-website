import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_안전모감지.png";
import styles from "./ai.module.css";

export default function SafetyHelmetDetection() {
  return (
    <>
      <Navbar />
      <img src={productImage} className={styles.img} alt="안전모 감지"></img>
    </>
  );
}
