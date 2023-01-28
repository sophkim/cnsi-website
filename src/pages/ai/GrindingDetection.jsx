import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_응용그라인딩감지.png";
import styles from "./ai.module.css";

export default function GrindingDetection() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="응용 그라인딩 감지"
      ></img>
    </>
  );
}
