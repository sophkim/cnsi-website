import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/IPTV_HD방송인코더.png";
import styles from "./product.module.css";

export default function Cms() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="IPTV_방송인코더"
      ></img>
    </>
  );
}
