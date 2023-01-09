import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>회사소개</li>
        <li>제품소개</li>
        <li>AI개발</li>
        <li>파트너</li>
        <li>고객지원</li>
        <li className={styles.facebook}>
          <GrFacebook />
        </li>
        <li>페이스북</li>
        <li>
          <GrLanguage />
        </li>
        <li>한국어</li>
      </ul>
    </nav>
  );
}

export default Navbar;
