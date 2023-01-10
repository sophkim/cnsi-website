import React from "react";
import styles from "./dropdownIntro.module.css";

function DropdownIntro(props) {
  return (
    <div>
      {/* 회사소개 */}
      <ul className={styles.dropdownIntro}>
        <li>인사말</li>
        <li>특허 및 소프트웨어 저작권</li>
        <li>오시는길</li>
        <li>연락처</li>
      </ul>
    </div>
  );
}

export default DropdownIntro;
