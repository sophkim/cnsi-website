import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/Octo_Fly.png";
import styles from "./product.module.css";

export default function OctoFLY() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="Octo Thermal WiFi"
      ></img>
    </>
  );
}
