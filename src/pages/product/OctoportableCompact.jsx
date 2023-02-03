import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/LTE이동형_OctoPus_Compact.png";
import styles from "./product.module.css";

export default function OctoportableCompact() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="OctoPus Compact"
      ></img>
    </>
  );
}
