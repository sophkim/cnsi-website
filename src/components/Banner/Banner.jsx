import React from "react";
import styles from "./banner.module.css";

function Banner(props) {
  return (
    <section className={styles.section}>
      <p className={styles.p}>Computing Navigated Solution Integrator </p>
      <h1 className={styles.h1}>산업현장의 안전을 위한 다양한 솔루션</h1>
    </section>
  );
}

export default Banner;
