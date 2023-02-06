import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/IP스피커_방송단말기.png";
import styles from "./product.module.css";

export default function IpSpeakerBroadcastDevice() {
  return (
    <>
      <Navbar />
      <img
        src={productImage}
        className={styles.img}
        alt="IP스피커 방송 단말기"
      ></img>
    </>
  );
}
