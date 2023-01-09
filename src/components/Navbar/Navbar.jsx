import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li className={styles.logo}>
          <a href="https://www.cnsi.kr">
            <img src={logo} className={styles.logoImage} alt="" />
          </a>
        </li>
        <li>회사소개</li>
        {/* <ul>
            <li>인사말</li>
            <li>특허 및 소프트웨어 저작권</li>
            <li>오시는길</li>
            <li>연락처</li>
          </ul> */}
        <li>제품소개</li>
        <li>AI개발</li>
        <li>파트너</li>
        <li>고객지원</li>
        <li>다운로드</li>
        <li className={styles.corner}></li>
        <li className={styles.facebook}>
          <a href title="페이스북">
            <GrFacebook className={styles.facebookIcon} />
            <span>페이스북</span>
          </a>
        </li>
        <li className={styles.language}>
          <a href title="언어">
            <GrLanguage className={styles.languageIcon} />
            <span>한국어</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
