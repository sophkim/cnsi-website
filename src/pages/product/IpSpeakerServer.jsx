import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/IP스피커_스피커서버.png";
import styles from "./product.module.css";

export default function IpSpeakerServer() {
  return (
    <>
      <Navbar />
      <img src={productImage} className={styles.img} alt="IP스피커 서버"></img>
    </>
  );
}
