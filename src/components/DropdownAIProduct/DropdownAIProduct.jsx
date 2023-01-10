import React from "react";
import styles from "./dropdownAIProduct.module.css";

function DropdownAIProduct(props) {
  return (
    <div>
      {/* 제품소개 */}
      <ul className={styles.dropdownAIProduct}>
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
    </div>
  );
}

export default DropdownAIProduct;
