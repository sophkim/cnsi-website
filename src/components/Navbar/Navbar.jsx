import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { GrLanguage, GrFacebook } from "react-icons/gr";

function Navbar(props) {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAIProductOpen, setIsAIProductOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const handleIntro = () => {
    setIsIntroOpen(true);
  };

  const handleIntroClose = () => {
    setIsIntroOpen(false);
  };

  const handleProduct = () => {
    setIsProductOpen(true);
  };

  const handleProductClose = () => {
    setIsProductOpen(false);
  };

  const handleAIProduct = () => {
    setIsAIProductOpen(true);
  };

  const handleAIProductClose = () => {
    setIsAIProductOpen(false);
  };

  const handlePartner = () => {
    setIsPartnerOpen(true);
  };

  const handlePartnerClose = () => {
    setIsPartnerOpen(false);
  };

  return (
    <div className={styles.nav}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {" "}
          <a href="https://www.cnsi.kr">
            <img src={logo} className={styles.logoImage} alt="" />
          </a>
        </div>
        <ul className={styles.naviMenu}>
          <li onMouseEnter={handleIntro} onMouseLeave={handleIntroClose}>
            회사소개
          </li>
          <li onMouseEnter={handleProduct} onMouseLeave={handleProductClose}>
            제품소개
          </li>
          <li
            onMouseEnter={handleAIProduct}
            onMouseLeave={handleAIProductClose}
          >
            AI개발
          </li>
          <li onMouseEnter={handlePartner} onMouseLeave={handlePartnerClose}>
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

      {/* 회사소개 */}
      {isIntroOpen ? (
        <ul
          className={styles.dropdownIntro}
          onMouseEnter={handleIntro}
          onMouseLeave={handleIntroClose}
        >
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
      ) : (
        ""
      )}

      {/* 제품소개 */}
      {isProductOpen ? (
        <ul
          className={styles.dropdownProduct}
          onMouseEnter={handleProduct}
          onMouseLeave={handleProductClose}
        >
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
      ) : (
        ""
      )}

      {/* AI개발 */}
      {isAIProductOpen ? (
        <ul
          className={styles.dropdownAIProduct}
          onMouseEnter={handleAIProduct}
          onMouseLeave={handleAIProductClose}
        >
          <ul>
            <p>AI 솔루션</p>
            <li>안전모 감지</li>
            <li>응용 그라인딩 감지</li>
            <li>스마트 게이지</li>
          </ul>

          <ul>
            <p>AI R&D 실적</p>
            <li>반도체 웨이퍼 furnace 공정 사고 예측 모니터링</li>
            <li>도로교량 신축이음 유간 변화 분석</li>
            <li>P&ID 도면 관계 해석</li>
          </ul>

          <ul>
            <p>VISION Engineering</p>
          </ul>
        </ul>
      ) : (
        ""
      )}

      {/* 파트너 */}
      {isPartnerOpen ? (
        <ul
          className={styles.dropdownPartner}
          onMouseEnter={handlePartner}
          onMouseLeave={handlePartnerClose}
        >
          <ul>
            <p>납품실적</p>
          </ul>

          <ul>
            <p>파트너 소개</p>
          </ul>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
