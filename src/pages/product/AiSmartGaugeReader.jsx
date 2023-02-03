import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/조달_스마트게이지리더.png";
import styles from "./product.module.css";

export default function AiSmartGaugeReader() {
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
