import React from "react";
import styles from "./dropdownPartner.module.css";

function DropdownPartner(props) {
  return (
    <div>
      {/* 제품소개 */}
      <ul className={styles.dropdownPartner}>
        <ul>
          <p>납품실적</p>
        </ul>

        <ul>
          <p>파트너 소개</p>
        </ul>
      </ul>
    </div>
  );
}

export default DropdownPartner;
