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
          <a href="/">
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
          <a href="/support">
            <li>고객지원</li>
          </a>
          <a href="/download">
            <li>다운로드</li>
          </a>
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
          <a href="/about/greeting">
            <ul>
              <p>인사말</p>
            </ul>
          </a>
          <a href="/about/patent">
            <ul>
              <p>특허 및 소프트웨어 저작권</p>
            </ul>
          </a>
          <a href="/about/location">
            <ul>
              <p>오시는길</p>
            </ul>
          </a>
          <a href="/about/contact">
            <ul>
              <p>연락처</p>
            </ul>
          </a>
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
            <a href="/product/procurement/portable-lte-camera">
              <li>LTE 이동형 현장 관제 카메라</li>
            </a>
            <a href="/product/procurement/ai-smart-gauge-reader">
              <li>AI 스마트 게이지 리더</li>
            </a>
          </ul>

          <ul>
            <p>LTE 이동형 카메라</p>
            <a href="/product/portable-lte-camera/standard">
              <li>Octoportable Standard</li>
            </a>
            <a href="/product/portable-lte-camera/compact">
              <li>Octoportable Compact</li>
            </a>
            <a href="/product/portable-lte-camera/pole">
              <li>Octoportable Pole</li>
            </a>
            <a href="/product/portable-lte-camera/wifi">
              <li>Octoportable Thermal WiFi</li>
            </a>
            <a href="/product/portable-lte-camera/fly">
              <li>Octo Fly</li>
            </a>
          </ul>

          <ul>
            <p>AI</p>
            <a href="/product/ai/smart-gauge-reader">
              <li>AI 스마트 게이지 리더</li>
            </a>
          </ul>

          <ul>
            <p>IPTV</p>
            <a href="/product/iptv/iptv">
              <li>IPTV</li>
            </a>
          </ul>

          <ul>
            <p>IP 스피커</p>
            <a href="/product/ip-speaker/ip-speaker">
              <li>IP 스피커</li>
            </a>
            <a href="/product/ip-speaker/ip-speaker-server">
              <li>IP 스피커 서버</li>
            </a>
            <a href="/product/ip-speaker/ip-speaker-broadcast-device">
              <li>IP 스피커 방송장치</li>
            </a>
          </ul>

          <ul>
            <p>영상 솔루션</p>
            <a href="/product/video-solution/streamer">
              <li>Octopus Streamer</li>
            </a>
            <a href="/product/video-solution/cms">
              <li>Octopus CMS (영상관제)</li>
            </a>
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
            <a href="/ai/solution/safety-helmet-detection">
              <li>안전모 감지</li>
            </a>
            <a href="/ai/solution/grinding-detection">
              <li>응용 그라인딩 감지</li>
            </a>
            <a href="/ai/solution/smart-gauge">
              <li>스마트 게이지</li>
            </a>
          </ul>

          <ul>
            <p>AI R&D 실적</p>
            <a href="/ai/r&d/furnace">
              <li>반도체 웨이퍼 furnace 공정 사고 예측 모니터링</li>
            </a>
            <a href="/ai/r&d/expansion-joint">
              <li>도로교량 신축이음 유간 변화 분석</li>
            </a>
            <a href="/ai/r&d/p&id">
              <li>P&ID 도면 관계 해석</li>
            </a>
          </ul>

          <ul>
            <a href="/ai/vision-engineering">
              <p>VISION Engineering</p>
            </a>
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
            <a href="/partner/delivery">
              <p>납품실적</p>
            </a>
          </ul>

          <ul>
            <a href="/partner/parners">
              <p>파트너 소개</p>
            </a>
          </ul>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
