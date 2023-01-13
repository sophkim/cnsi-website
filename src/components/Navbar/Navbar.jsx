import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";
import DropdownIntro from "../DropdownIntro/DropdownIntro";
import DropdownProduct from "../DropdownProduct/DropdownProduct";
import DropdownAIProduct from "../DropdownAIProduct/DropdownAIProduct";
import DropdownPartner from "../DropdownPartner/DropdownPartner";

function Navbar(props) {
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
          <li onMouseEnter={handleIntro} onMouseLeave={handleIntro}>
            회사소개
          </li>
          <li onMouseEnter={handleProduct} onMouseLeave={handleProduct}>
            제품소개
          </li>
          <li onMouseEnter={handleAIProduct} onMouseLeave={handleAIProduct}>
            AI개발
          </li>
          <li onMouseEnter={handlePartner} onMouseLeave={handlePartner}>
            파트너
          </li>
          <li>고객지원</li>
          <li>다운로드</li>
        </ul>
        <ul className={styles.naviUtill}>
          <li>
            <GrFacebook className={styles.facebook} />
            <span>페이스북</span>
          </li>
          <li>
            <GrLanguage className={styles.language} />
            <span>한국어</span>
          </li>
        </ul>
      </nav>
      {isIntroOpen ? <DropdownIntro setIsIntroOpen={setIsIntroOpen} /> : ""}
      {isProductOpen ? <DropdownProduct /> : ""}
      {isAIProductOpen ? <DropdownAIProduct /> : ""}
      {isPartnerOpen ? <DropdownPartner /> : ""}
    </>
  );
}

export default Navbar;
