import React, { useState } from "react";
import styles from "./navigation.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";
import DropdownIntro from "../DropdownIntro/DropdownIntro";
import DropdownProduct from "../DropdownProduct/DropdownProduct";
import DropdownAIProduct from "../DropdownAIProduct/DropdownAIProduct";
import DropdownPartner from "../DropdownPartner/DropdownPartner";

function Navigation(props) {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAIProductOpen, setIsAIProductOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const handleIntro = () => {
    setIsIntroOpen((prev) => !prev);
  };

  const handleProduct = () => {
    setIsProductOpen((prev) => !prev);
  };

  const handleAIProduct = () => {
    setIsAIProductOpen((prev) => !prev);
  };

  const handlePartner = () => {
    setIsPartnerOpen((prev) => !prev);
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
            <a
              href=""
              onMouseEnter={handleAIProduct}
              onMouseLeave={handleAIProduct}
            >
              AI개발
            </a>
          </li>
          <li>
            <a
              href=""
              onMouseEnter={handlePartner}
              onMouseLeave={handlePartner}
            >
              파트너
            </a>
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
      {isAIProductOpen ? <DropdownAIProduct /> : ""}
      {isPartnerOpen ? <DropdownPartner /> : ""}
    </>
  );
}

export default Navigation;
