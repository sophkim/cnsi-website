import React, { useState } from "react";
import styles from "./navigation.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";
import { DiAndroid } from "react-icons/di";
import DropdownIntro from "../DropdownIntro/DropdownIntro";
import DropdownProduct from "../DropdownProduct/DropdownProduct";

function Navigation(props) {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const handleIntro = () => {
    setIsIntroOpen((prev) => !prev);
  };

  const handleProduct = () => {
    setIsProductOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {" "}
          <a href="https://www.cnsi.kr">
            <img src={logo} className={styles.logoImage} alt="" />
          </a>
        </div>
        <ul className={styles.naviMenu}>
          <li>
            <a href="" onMouseEnter={handleIntro} onMouseLeave={handleIntro}>
              회사소개
            </a>
          </li>
          <li>
            <a
              href=""
              onMouseEnter={handleProduct}
              onMouseLeave={handleProduct}
            >
              제품소개
            </a>
          </li>
          <li>
            <a href="">AI개발</a>
          </li>
          <li>
            <a href="">파트너</a>
          </li>
          <li>
            <a href="">고객지원</a>
          </li>
          <li>
            <a href="">다운로드</a>
          </li>
        </ul>
        <ul className={styles.naviUtill}>
          <li>
            <a href="">
              <GrFacebook className={styles.facebook} />
              <span>페이스북</span>
            </a>
          </li>
          <li>
            <a href="">
              <GrLanguage className={styles.language} />
              <span>한국어</span>
            </a>
          </li>
        </ul>
      </nav>
      {isIntroOpen ? <DropdownIntro /> : ""}
      {isProductOpen ? <DropdownProduct /> : ""}
    </>
  );
}

export default Navigation;
