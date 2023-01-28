import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_신축이음유간분석.png";
import styles from "./ai.module.css";

export default function ExpansionJoint() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="신축이음 유간 분석"
      ></img>
    </>
  );
}
