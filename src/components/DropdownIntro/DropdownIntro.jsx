import React from "react";
import styles from "./dropdownIntro.module.css";

function DropdownIntro() {
  return (
    <div>
      {/* 회사소개 */}
      <ul className={styles.dropdownIntro}>
        <ul>
          <p>인사말</p>
        </ul>
        <ul>
          <p>특허 및 소프트웨어 저작권</p>
        </ul>
        <ul>
          <p>오시는길</p>
        </ul>
        <ul>
          <p>연락처</p>
        </ul>
      </ul>
    </div>
  );
}

export default DropdownIntro;
