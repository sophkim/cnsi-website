import React from "react";
import styles from "./dropdownProduct.module.css";

function DropdownProduct(props) {
  return (
    <div>
      {/* 제품소개 */}
      <ul className={styles.dropdownProduct}>
        <ul>
          <p>조달제품</p>
          <li>LTE 이동형 현장 관제 카메라</li>
          <li>AI 스마트 게이지 리더</li>
        </ul>

        <ul>
          <p>LTE 이동형 카메라</p>
          <li>Octoportable Standard</li>
          <li>Octoportable Compact</li>
        </ul>

        <ul>
          <p>AI</p>
          <li>AI 스마트 게이지 리더</li>
        </ul>

        <ul>
          <p>IPTV</p>
          <li>IPTV</li>
        </ul>

        <ul>
          <p>IP 스피커</p>
          <li>IP 스피커</li>
          <li>IP 스피커 서버</li>
          <li>IP 스피커 방송장치</li>
        </ul>

        <ul>
          <p>영상 솔루션</p>
          <li>Octopus Streamer</li>
          <li>Octopus CMS (영상관제)</li>
        </ul>
      </ul>
    </div>
  );
}

export default DropdownProduct;
