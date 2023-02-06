import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/IPTV_셋탑박스.png";
import styles from "./product.module.css";

export default function Cms() {
  return (
    <>
      <Navbar />
      <img src={productImage} className={styles.img} alt="셋탑박스"></img>
    </>
  );
}
