import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_아날로그게이지.png";
import styles from "./ai.module.css";

export default function SmartGauge() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="아날로그 게이지"
      ></img>
    </>
  );
}
