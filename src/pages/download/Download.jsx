import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./download.module.css";
import manual from "../../assets/manual.png";
import solution from "./solution.pdf";
import optopusEye from "./optopusEye.jpg";

export default function Download() {
  return (
    <>
      <Navbar />
      <p className={styles.p}>다운로드</p>
      <div className={styles.div}></div>

      {/* 파일 다운로드 리스트 */}
      <div className={styles.download}>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제품명</th>
              <th>제공일자</th>
              <th>다운로드</th>
            </tr>
          </thead>
          <tbody>
            {/* solution */}
            <tr>
              <th>1</th>
              <th>solution example</th>
              <th>2023-01-01</th>
              <th>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>

            {/* octopusEye */}
            <tr>
              <th>2</th>
              <th>octopusEye example</th>
              <th>2023-01-01</th>
              <th>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>

            {/* solution */}
            <tr>
              <th>3</th>
              <th>solution example</th>
              <th>2023-01-01</th>
              <th>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>

            {/* octopusEye */}
            <tr>
              <th>4</th>
              <th>octopusEye example</th>
              <th>2023-01-01</th>
              <th>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>

            {/* solution */}
            <tr>
              <th>5</th>
              <th>solution example</th>
              <th>2023-01-01</th>
              <th>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>

            {/* octopusEye */}
            <tr>
              <th>6</th>
              <th>octopusEye example</th>
              <th>2023-01-01</th>
              <th>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
