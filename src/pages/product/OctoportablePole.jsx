import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/LTE이동형_OctoPortable_Pole.png";
import styles from "./product.module.css";

export default function OctoportablePole() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="OctoPortable Pole"
      ></img>
    </>
  );
}
