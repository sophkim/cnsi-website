import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/WIFI_열화상_현장안전_카메라.png";
import styles from "./product.module.css";

export default function OctoThermalWiFi() {
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
