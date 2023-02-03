import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/조달_LTE이동형현장관제카메라.png";
import styles from "./product.module.css";

export default function PortableIteCamera() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="AI 스마트 게이지 리더"
      ></img>
    </>
  );
}
