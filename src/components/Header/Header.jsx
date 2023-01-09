import React from "react";
import styles from "./header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.background} alt="background"></div>
      <div className={styles.text}>
        <p className={styles.text1}>Computing Naviated Solution Integrator</p>
        <h1 className={styles.text2}>산업현장의 안전을 위한 다양한 솔루션</h1>
        <p className={styles.text3}>
          CNSI는 IT의 핵심기술을 보유하고 있으며 도전과 열정으로 끊임없는
          연구개발과 투자를 통해
        </p>
        <p className={styles.text4}>
          모든 이에게 도움이되는 공공의 서비스를 제공하고자 노력합니다.
        </p>
      </div>
      <button className={styles.button}>Start</button>
    </header>
  );
}

export default Header;
