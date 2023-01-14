import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./download.module.css";

export default function Download() {
  return (
    <>
      <Navbar />
      <p className={styles.p}>다운로드</p>
      <div className={styles.div}></div>
    </>
  );
}
